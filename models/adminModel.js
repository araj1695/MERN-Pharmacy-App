const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please add a Name"]
    },
    email: {
        type: String,
        required: [true, "Please add a Email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    }
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;