const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true,
        unique: false
    }
})

const Budget = mongoose.model('budget', BudgetSchema);

module.exports = Budget;