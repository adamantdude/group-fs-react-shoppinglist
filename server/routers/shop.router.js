const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// router paths

router.post('/', (req, res) => {
    console.log('inside POST', req.body);

    let sqlText = `
        INSERT INTO "shoppingList" ("item", "quantity", "units", "purchased")
        VALUES ($1, $2, $3, $4)
    `
    pool.query(sqlText, [req.body.item, req.body.quantity, req.body.units, false])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            res.sendStatus(500);
        })
})

module.exports = router;