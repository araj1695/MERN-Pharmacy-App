const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const MedicineCart = mongoose.model("MedicineCart", medicineSchema);

module.exports = MedicineCart;