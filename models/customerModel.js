const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    orders: {
        type: mongoose.Collection
    }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;