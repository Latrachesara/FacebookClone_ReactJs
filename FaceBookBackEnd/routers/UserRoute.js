const express = require("express")
const router = express.Router()
const UserControlllers = require("./../controllers/UserControllers")

router.get ("/:id", UserControlllers.getUser)
module.exports = router