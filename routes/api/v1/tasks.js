const express = require('express');
const router = express.Router();

const Task = require('../../../models/Task.js');

router.get('/:id', (req, res) => {
    console.log('Connection attempt made');
    Task.findById(req.body.id).then(task => {
        console.log(task);
        res.send(task);
    })
})

router.get('/', (req, res) => {
    Task.find()
        .then(obj => res.send(obj))
})

router.post('/', (req, res) => {
    let taskObj = new Task({
        task: req.body.newTask,
    })
    taskObj.save((err) => {
        if (err) res.status(402).json(err)
        else res.send(taskObj);
    })
})

router.delete('/:task', (req, res) => {
    console.log(`Request to delete record with task of ${req.params.task}`);
    Task.deleteOne({ task: req.params.task }, (err) => {
        err ? console.log(err) : console.log(`Task "${req.params.task}" deleted`);
    })
    Task.find().then(obj => res.send(obj));
})

module.exports = router;