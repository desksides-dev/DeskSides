const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//gets publications from the publications table for drop down on assessments:
router.get('/pubs', (req, res) => {
  const queryText = `SELECT * from "publications";`;

  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log('Error getting publications for reducer: ', err);
      res.sendStatus(500);
    });

});

//gets markets from the markets table for drop down on assessments:
router.get('/markets', (req, res) => {
  const queryText = `SELECT * from "markets";`;

  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log('Error getting markets for reducer: ', err);
      res.sendStatus(500);
    });
});


// posts to junction tables when journalists OR brands choose their
// applicable markets and publications while completing assessments
router.post('/junctions', rejectUnauthenticated, async (req, res) => {
  const markets = req.body.markets
  const pubs = req.body.pubs
  const id = req.user.id

  const connection = await pool.connect()

  try {
    await connection.query('BEGIN');

    const sqlMarketText =
      `INSERT INTO "users_markets" 
    ("user_id", "markets_id")
    VALUES ($1, $2);`;

    const sqlPubText =
      `INSERT INTO "users_publications" 
    ("user_id", "publications_id")
    VALUES ($1, $2);`

    for (const market of markets) {
      await connection.query(sqlMarketText, [id, Number(market)]);
    }

    for (const pub of pubs) {
      await connection.query(sqlPubText, [id, Number(pub)]);
    }

    await connection.query('COMMIT');

    res.sendStatus(200);

  } catch (error) {

    await connection.query('ROLLBACK');

    console.log('Error posting to /junctions: ', error);

    res.sendStatus(500);

  } finally {

    connection.release();

  }

});

// updates brand user information:
router.put('/brands', rejectUnauthenticated, (req, res) => {
  const stories = Number(req.body.stories_per_month);

  const queryText =
    `UPDATE "users"
    SET "stories_per_month" = $2, "pub_medium" = $3, 
    "affiliate_link" = $4, "calendar_link" = $5, "profile_image_link" = $6,
    "fileshare_link" = $7, "payment_link" = $8, "time_of_day_pref" = $9, "brand_name" = $10
    WHERE "id" = $1;`;

  const queryValues =
    [req.user.id, stories, req.body.pub_medium,
    req.body.affiliate_link, req.body.calendar_link, req.body.profile_image_link,
    req.body.fileshare_link, req.body.payment_link,
    req.body.time_of_day_pref, req.body.brand_name]

  pool
    .query(queryText, queryValues)
    .then((result) => res.sendStatus(200))
    .catch((err) => {
      console.log('Error updating brand to database: ', err);
      res.sendStatus(500);
    });
})

// updates journalist user information:
router.put('/journalists', rejectUnauthenticated, (req, res) => {
  const stories = Number(req.body.stories_per_month);
  const years = Number(req.body.years_of_exp);

  const queryText =
    `UPDATE "users" 
    SET "pub_medium" = $2, "stories_per_month" = $3, 
    years_of_exp = $4, "calendar_link" = $5, "profile_image_link" = $6,
    "fileshare_link" = $7, "payment_link" = $8
    WHERE "id" = $1;`;

  const queryValues =
    [req.user.id, req.body.pub_medium, stories, years,
    req.body.calendar_link, req.body.profile_image_link, req.body.fileshare_link,
    req.body.payment_link]

  pool
    .query(queryText, queryValues)
    .then((result) => res.sendStatus(200))
    .catch((err) => {
      console.log('Error posting journalist details to database: ', err);
      res.sendStatus(500);
    });
})

module.exports = router;
