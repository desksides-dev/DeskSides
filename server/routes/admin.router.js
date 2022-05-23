const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


//GET all users
router.get('/', rejectUnauthenticated, (req, res) => {

    if (req.user.user_type === 'admin') {

        const queryText = `SELECT * FROM "users" ORDER BY "id" DESC`

        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
    else {
        console.log('UNAUTHORIZED!')
    }
});

//PUT route to update approval status of users
router.put('/:approvalStatus/:id', (req, res) => {

    //ID refers to user being edited by admin NOT logged-in user
    const approvalStatus = req.params.approvalStatus;
    const id = req.params.id;

    const queryText = `
            UPDATE "users" 
            SET "approved" = $1
            WHERE "id" = $2
            ;`

    pool.query(queryText, [approvalStatus, id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        });

    console.log('');

});

//POST user matches
router.post('/:journoId/:brandId', (req, res) => {

    const journoId = req.params.journoId;
    const brandId = req.params.brandId;

    const queryText = `
            INSERT INTO "journalists_brands"
            ("journalists_id", "brands_id") 
            VALUES ($1, $2)
            ;`

    pool.query(queryText, [journoId, brandId])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        });

    console.log('');

});

router.get('/matches/:id/:userMatchType', rejectUnauthenticated, (req, res) => {

    const id = req.params.id;
    const userMatchType = req.params.userMatchType;
    if (req.user.user_type === 'admin') {

        const queryText = `
        SELECT * FROM "journalists_brands" 
        JOIN "users" ON "journalists_brands"."journalists_id" = "users"."id" OR "journalists_brands"."brands_id" = "users"."id"
        WHERE "journalists_id" = $1 AND "users"."user_type" = $2
        OR "brands_id" = $1 AND "users"."user_type" = $2  
        ;`

        pool.query(queryText, [id, userMatchType])
            .then((result) => {
                res.send(result.rows);
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
    else {
        console.log('UNAUTHORIZED!')
    }
});

//DELETE user matches
router.delete('/:journoId/:brandId', (req, res) => {

    const journoId = req.params.journoId;
    const brandId = req.params.brandId;

    const queryText = `
            DELETE FROM "journalists_brands"
            WHERE "journalists_id" = $1 AND "brands_id" = $2
            OR "journalists_id" = $2 AND "brands_id" = $1
            ;`

    pool.query(queryText, [journoId, brandId])
        .then((result) => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.sendStatus(500);
        });

    console.log('');

});

//GET all brands
router.get('/brands', rejectUnauthenticated, (req, res) => {

    if (req.user.user_type === 'admin') {

        const queryText = `SELECT * FROM "users" WHERE "user_type" = 'brand' ORDER BY "id" DESC`

        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
    else {
        console.log('UNAUTHORIZED!')
    }
});

//GET all journalists
router.get('/journos', rejectUnauthenticated, (req, res) => {

    console.log(req.user);

    if (req.user.user_type === 'admin') {

        const queryText = `SELECT * FROM "users" WHERE "user_type" = 'journalist' ORDER BY "id" DESC`

        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
    else {
        console.log('UNAUTHORIZED!')
    }
});

module.exports = router;