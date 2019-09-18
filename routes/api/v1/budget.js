const express = require('express');
const router = express.Router();

const Budget = '../../../models/Budget.js';

router.get('/', (req, res) => {
    Budget.find().then(obj => console.log(obj))
})

router.post('/', (req, res) => {
    const reqObj = req.body.newBudget;
    reqObj.map(reqObj => {
        let budgetObj = new Budget({
            title: reqObj.title,
            name: reqObj.name,
            amount: reqObj.amount,
        })
        console.log(budgetObj);
        budgetObj.save((err) => {
            if (err) return console.log(err);
        })
    })
})

module.exports = router;