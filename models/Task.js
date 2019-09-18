const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: {
        type: String,
        required: true,
        unique: true
    },
    // priority: {
    //     type: Number,
    //     required: true,
    //     unique: false
    // },
    // dueDate: {
    //     type: Date,
    //     required: true,
    //     unique: false
    // },
    // isCompleted: {
    //     type: Boolean,
    //     required: true,
    //     unique: false
    // }
})

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;