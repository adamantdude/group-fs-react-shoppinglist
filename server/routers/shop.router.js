const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// router paths

router.post('/', (req, res) => {
    console.log('inside POST', req.body);

    if(!(req.body.item && req.body.quantity && req.body.units)) {
        res.send('Not all required fields are filled out!');
        // res.sendStatus(400);
        return;
    }

    let sqlText = `
        INSERT INTO "shoppingList" ("name", "quantity", "units", "purchased")
        VALUES ($1, $2, $3, $4)
    `
    pool.query(sqlText, [req.body.item, req.body.quantity, req.body.units, false])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    console.log('inside GET');

    let sqlText = `
    SELECT * FROM "shoppingList"
    ORDER BY  "purchased", "name";
        `;
    pool.query(sqlText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log(`Error making database query ${sqlText}`, err);
            res.sendStatus(500);
        });
});

//PUT resetItems
router.put('/', (req, res) => {
    console.log('inside PUT resetItems');

    let sqlText = `
        UPDATE  "shoppingList"
        SET "purchased" = FALSE;`;
    pool.query(sqlText)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    console.log('inside delete all');

    let sqlText = `
        DELETE FROM "shoppingList";`;
    pool.query(sqlText)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
    console.log('inside DELETE:id');

    let sqlText = `
        DELETE FROM "shoppingList" WHERE "id" = $1
    `
    pool.query(sqlText, [req.params.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
})

router.put('/:id', (req, res) => {
    console.log('inside PUT:id');

    let sqlText = `
        UPDATE "shoppingList" SET "purchased" = TRUE WHERE "id" = $1
    `
    pool.query(sqlText, [req.params.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
})

router.put('/edit/:id', (req, res) => {
    console.log('inside EDIT:id');
    console.log(req.body);

    let sqlText = `
        UPDATE "shoppingList" SET "name" = $1, "quantity" = $2, "units" = $3 WHERE "id" = $4
    `

    pool.query(sqlText, [req.body.name, req.body.quantity, req.body.units, req.body.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
})

module.exports = router;