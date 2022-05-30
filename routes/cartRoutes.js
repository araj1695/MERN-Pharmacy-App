const { ObjectId } = require("bson");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const UserDetail = require("../models/userDetailsModel");
const MedicineCart = require("../models/medicineCartModel");


let cartItem = [];

router.route("/admin-items").get((req,res) => {
    MedicineCart.find().then(foundItems => {
        res.json(foundItems);
    });
});

router.route("/delete-items").post((req,res) => {
    const id = req.body.id;
    MedicineCart.deleteOne({"_id":ObjectId(id)})
    .catch(e => console.log(e));
});

router.route("/api/cart").post((req,res) => {
    cartItem = req.body;
})
router.route("/api/cart-item").get((req,res) => {
    res.json(cartItem);
})

router.route("/add-item").post((req,res) => {
    const name = req.body.name;
    const brand = req.body.brand;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = 0;
    const newMedicineCart = new MedicineCart({
        name,
        brand,
        description,
        price,
        quantity
    });
    newMedicineCart.save();
})


router.route("/register").post((req,res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new UserDetail({
        first_name,
        last_name,
        mobile,
        email,
        password
    });
    newUser.save();
})

router.route("/users").get((req,res) => {
    UserDetail.find().then(foundItems => {
        res.json(foundItems);
    });
});

router.route("/login").post((req,res) => {
    const userName = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        userName,
        password
    });
    newUser.save();
})

router.route("/admin").post((req,res) => {
    const userName = req.body.email;
    const password = req.body.password;
    const newAdmin = new Admin({
        userName,
        password
    });
    newAdmin.save();
})

module.exports = router;