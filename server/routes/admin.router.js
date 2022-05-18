const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


//GET all users
router.get('/', rejectUnauthenticated, (req, res) => {

    console.log(req.user);
    
    if (req.user.user_type === 'admin') {

        const queryText = `SELECT * FROM "users" ORDER BY "id" DESC`

        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((err) => {
                console.log('god.router GET results failed: ', err);
                res.sendStatus(500);
            });
    }
    else {
        console.log('UNAUTHORIZED!')
    }
});

module.exports = router;