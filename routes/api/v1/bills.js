const express = require('express');
const router = express.Router();

const Bill = require('../../../models/Bill.js');

router.get('/', (req, res) => {
    Bill.find().then(obj => res.send(obj));
})

router.get('/:id', (req, res) => {
    console.log('Connection attempt made');
    Bill.findById(req.body.id).then(bill => {
        console.log(bill);
        res.send(`Here is the bill information: ${bill}`);
    })
})

router.post('/', (req, res) => {
    const reqObj = req.body.newBill;
    reqObj.map(bill => {
        let billObj = new Bill({
            name: bill.name,
            amount: bill.amount,
            dueDate: bill.dueDate,
            autoPay: bill.autoPay
        })
        console.log(billObj);
        billObj.save((err) => {
            if (err) return console.log(err);
        })
    })
})

router.delete('/:name', (req, res) => {
    console.log(`Request to delete record with name of ${req.params.name}`)
    Bill.deleteOne({ name: req.params.name }, (err) => {
        err ? console.log(err) : console.log(`Task "${req.params.name}" deleted`);
    })
    Bill.find().then(obj => res.send(obj));
})

module.exports = router;