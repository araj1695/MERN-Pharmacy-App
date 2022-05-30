const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "Please add first name"]
    },
    last_name: {
        type: String,
        required: [true, "Please add last name"]
    },
    mobile: {
        type: String,
        required: [true, "Please add a mobile number"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please add a email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
}, { timestamps: true });

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

module.exports = UserDetail;