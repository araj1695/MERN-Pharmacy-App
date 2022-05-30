const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const UserDetail = require("../models/userDetailsModel")
const Admin = require("../models/adminModel")


// @desc    Register new user
// @route   POST /api/users
// @acess   Public
const registerUser = asyncHandler(async (req,res) => {
    const {first_name, last_name, mobile, email, password} = req.body
    if(!first_name || !last_name || !mobile || !email || !password){
        res.status(400)
        throw new Error("Please add all fields.")
    }
    // Check if user exists
    const userExists = await UserDetail.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User all ready Exists.")
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Create User
    const user = await UserDetail.create({
        first_name, 
        last_name, 
        mobile,
        email,
        password: hashedPassword
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.first_name + " " +user.last_name,
            mobile: user.mobile,
            email: user.email,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @acess   Public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body
    // Checking user
    const user = await UserDetail.findOne({email})
    if(!user){
        res.status(400)
        throw new Error("User does not exists");
    }
    // Matching password
    const machingPassword = await bcrypt.compare(password, user.password)
    if(machingPassword){
        res.status(201).json({
            _id: user.id,
            name: user.first_name+" "+user.last_name,
            mobile: user.mobile,
            email: user.email,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error("Incorrect Password");
    }
})


// @desc    Register new Admin
// @route   POST /api/users/admin
// @acess   Private
const registerAdmin = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields.")
    }
    // Check if user exists
    const userExists = await Admin.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User all ready Exists.")
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Create User
    const user = await Admin.create({
        name,
        email,
        password: hashedPassword
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

// @desc    Authenticate a Admin
// @route   POST /api/users/login-login
// @acess   Public
const loginAdmin = asyncHandler(async (req,res) => {
    const {email, password} = req.body
    // Checking user
    const user = await Admin.findOne({email})
    if(!user){
        res.status(400)
        throw new Error("User does not exists");
    }
    // Matching password
    const machingPassword = await bcrypt.compare(password, user.password)
    if(machingPassword){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error("Incorrect Password");
    }
})


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
}

module.exports = {
    registerUser,
    loginUser,
    registerAdmin,
    loginAdmin
}