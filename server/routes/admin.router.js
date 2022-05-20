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

    console.log('^^^^^^^^^^^^ admin match post journoId =', journoId, 'brandId =', brandId);

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

router.get('/matches/:id/:userType', rejectUnauthenticated, (req, res) => {

    const id = req.params.id;
    const userType = req.params.userType;

    if (req.user.user_type === 'admin') {

        const queryText = `
        SELECT * FROM "journalists_brands" 
        JOIN "users" ON "journalists_brands"."journalists_id" = "users"."id" OR "journalists_brands"."brands_id" = "users"."id"
        WHERE "journalists_id" = $1 OR "brands_id" = $1
        AND "users"."user_type" = $2
        ;`

        pool.query(queryText, [id, userType])
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
            WHERE "journalists_id" = $1 OR "brands_id" = $1
            AND "journalists_id" = $2 OR "brands_id" = $2
            ;`

            console.log('^^^^^^^^^^^^^^delete Matches. journoId =', journoId, 'brandId =', brandId);

    pool.query(queryText, [journoId, brandId])
        .then((result) => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.sendStatus(500);
        });

    console.log('');

});

module.exports = router;