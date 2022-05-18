const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//gets publications from the publications table for drop down on assessments:
router.get('/pubs', (req, res) => {
    // console.log('in get for pubs');
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
    // console.log('in get for markets');
    const queryText = `SELECT * from "markets";`;
  
    pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log('Error getting markets for reducer: ', err);
      res.sendStatus(500);
    });
});

router.post('/markets/:id', rejectUnauthenticated, (req, res) => {
    const market = Number(req.params.id)
    const id = req.user.id

        const queryText = 
        `INSERT INTO "users_markets" 
        ("user_id", "markets_id")
        VALUES ($1, $2);`; 
        const queryValues = [id, market];  

        pool
        .query(queryText, queryValues)
        .then((result) => {
            res.sendStatus(204)
            })
        .catch((err) => {
          console.log('Error posting markets to database at /form/markets: ', err);
          res.sendStatus(500);
        });
    
});

router.post('/publications/:id', rejectUnauthenticated, (req, res) => {
    const pub = Number(req.params.id)
    const id = req.user.id

        const queryText = 
        `INSERT INTO "users_publications" 
        ("user_id", "publications_id")
        VALUES ($1, $2);`; 

        const queryValues = [id, pub];  
    
        pool
        .query(queryText, queryValues)
        .then((result) => {
            res.sendStatus(204)
            })
        .catch((err) => {
          console.log('Error posting pubs to database at /form/publications: ', err);
          res.sendStatus(500);
        });
    
});

router.put('/brands', rejectUnauthenticated, (req, res) => {
    const queryText = `UPDATE "users";`; 
    const queryValues = [req.user.id]

    pool
    .query(queryText)
    .then((result) => {})
    .catch((err) => {
      console.log('Error getting markets for reducer: ', err);
      res.sendStatus(500);
    });
})

router.put('/journalist', rejectUnauthenticated, (req, res) => {
    const stories = Number(req.body.stories_per_month)

    const queryText = 
    `UPDATE "users" 
    SET "pub_medium" = $2, "stories_per_month" = $3
    WHERE "id" = $1;`; 

    const queryValues = [req.user.id, req.body.pub_medium, stories ]

    pool
    .query(queryText, queryValues)
    .then((result) => res.sendStatus(200))
    .catch((err) => {
      console.log('Error posting journalist details to database: ', err);
      res.sendStatus(500);
    });
})

module.exports = router;
