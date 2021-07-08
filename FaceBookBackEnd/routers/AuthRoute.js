const express = require("express");
const router = express.Router();
const AuthControllers = require("./../controllers/AuthControllers");

router.post("/register", AuthControllers.Register);
router.post("/login", AuthControllers.login);
router.post("/logout", AuthControllers.logout);
router.post("/resetPassword", AuthControllers.ResetPassword);
router.post(
  "/verifeResetPasswordToken/:resetPasswordToken",
  AuthControllers.VerifeResetPasswordToken
);
router.post("/newPassword/:resetPasswordToken", AuthControllers.newPassword);

module.exports = router;
