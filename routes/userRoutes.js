const express = require("express")
const router = express.Router()
const {registerUser, loginUser, registerAdmin, loginAdmin} = require("../controllers/userController")
const {protect} = require("../middleware/authMiddleware")

router.post("/", registerUser)
router.post("/login", loginUser)
router.post("/admin", registerAdmin)
router.post("/admin-login", loginAdmin)

module.exports = router

