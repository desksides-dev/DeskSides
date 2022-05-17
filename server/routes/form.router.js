const express = require('express');
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

module.exports = router;
