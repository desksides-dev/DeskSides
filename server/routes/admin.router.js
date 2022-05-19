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
});

module.exports = router;