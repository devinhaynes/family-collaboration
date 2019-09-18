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
    const reqObj = req.body.newTask;
    console.log(reqObj);
    reqObj.map(item => {
        let taskObj = new Task({
            task: item.task,
            // priority: parseFloat(item.priority),
            // dueDate: item.dueDate,
            // isCompleted: item.isCompleted
        })
        console.log(taskObj);
        taskObj.save((err) => {
            if (err) return console.log(err);
        })
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