const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

// GET array of journalists matched with specified brand
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('journalists GET route');

    const queryText = `SELECT * FROM "users"
                       JOIN "journalists_brands" ON "users".id = "journalists_brands".journalists_id
                       WHERE "journalists_brands".brands_id = $1;
                       `
    const values = [req.user.id];
    pool.query(queryText, values)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in journalists GET')
        })
})

module.exports = router;