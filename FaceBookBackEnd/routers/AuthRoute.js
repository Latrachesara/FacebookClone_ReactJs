const express = require("express");
const router = express.Router();
const AuthControllers = require("./../controllers/AuthControllers");
const BodyCheck = require("./../middlewares/RegisterBodyCheck");


router.post("/register", BodyCheck, AuthControllers.Register);
router.post("/login", AuthControllers.login);
router.post("/logout", AuthControllers.logout);
router.post("/reset/Password", AuthControllers.ResetPassword);
router.post(
  "/verifeResetPasswordToken/:resetPasswordToken",
  AuthControllers.VerifeResetPasswordToken
);
router.post("/newPassword/:resetPasswordToken",   AuthControllers.newPassword);

module.exports = router;
