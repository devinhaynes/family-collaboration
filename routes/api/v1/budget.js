const express = require('express');
const router = express.Router();

const Budget = require('../../../models/Budget.js');

router.get('/', (req, res) => {
    console.log('Attempting GET to Budget....');
    Budget.find().then(db => res.send(db));
})

router.post('/', (req, res) => {
    const reqObj = req.body.newBudget;
    let budgetObj = new Budget({
        title: reqObj.title,
        name: reqObj.name,
        amount: reqObj.amount
    })

    budgetObj.save((err) => {
        if (err) return console.log(err)
        else res.send(budgetObj);
    })
})

module.exports = router;