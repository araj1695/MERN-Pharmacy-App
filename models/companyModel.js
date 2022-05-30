const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    stock_availability: {
        type: Number,
        required: true
    },
}, {timestamps:true});

const Company = mongoose.model("company", companySchema);

module.exports = Company;

