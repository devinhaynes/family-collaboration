const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    //   ******* OLD SCHEMA -- MAY USE IN LATER REVISIONS *********
    name: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true,
        unique: false
    },
    dueDate: {
        type: Date,
        required: true,
        unique: false
    },
    autoPay: {
        type: Boolean,
        required: true,
        unique: false
    }
})

const Bill = mongoose.model('bill', BillSchema);

module.exports = Bill;