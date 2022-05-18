const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

// GET array of journalists matched with specified brand
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('journalists GET route');

    const queryText = ``
})

module.exports = router;