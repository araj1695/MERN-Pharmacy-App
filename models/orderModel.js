const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerName:{
        type: String,
        required: true
    },
    customerId:{
        type: Number,
        required: true
    },
    medicineId:{
        type: Number,
        required: true
    },
    medicineName:{
        type: String,
        required: true
    },
    amountPaid:{
        type: Boolean,
        required: true
    },
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;