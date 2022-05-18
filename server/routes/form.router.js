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

router.post('/markets', rejectUnauthenticated, (req, res) => {
    const market = req.body.market
    const id = req.user.id

        const queryText = 
        `INSERT INTO "user_markets" 
        ("user_id", "markets_id")
        VALUES ($1, $2);`; 
        const queryValues = [id, market.id];  
    
        pool
        .query(queryText, queryValues)
        .then((result) => {
            })
        .catch((err) => {
          console.log('Error getting markets for reducer: ', err);
          res.sendStatus(500);
        });
    
});

router.post('/publications', rejectUnauthenticated, (req, res) => {
    const pub = req.body.pub
    const id = req.user.id

        const queryText = 
        `INSERT INTO "user_publications" 
        ("user_id", "publications_id")
        VALUES ($1, $2);`; 
        const queryValues = [id, pub.id];  
    
        pool
        .query(queryText, queryValues)
        .then((result) => {
            })
        .catch((err) => {
          console.log('Error getting markets for reducer: ', err);
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
    const queryText = `UPDATE "users" ;`; 
    const queryValues = [req.user.id]


    pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log('Error getting markets for reducer: ', err);
      res.sendStatus(500);
    });
})

module.exports = router;
