const mongoose = require('mongoose');
const moment = require('moment');

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        min: 10
    },
    item_name: {
        type: String,
        min: 4,
        max: 255
    },
    cost: {
        type: String,
        min: 4,
        max: 10
    },
    order_date: {
        type: Date,
        default: Date.now

    },
    delivery_date: {
        type: Date
    }
})

module.exports = mongoose.model('Orders', orderSchema);