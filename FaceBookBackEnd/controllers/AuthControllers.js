const user = require("./../Models/UserModel");
const bcrypt = require("bcrypt");
const SendEmail = require("./../Outils/EmailSender");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config();
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
const AuthControllers = {
  Register: async (req, res) => {
    const { firstName, lastName, birthDate, gendre, password, email } =
      req.body;
    try {
      const Errors = validationResult(req);
      if (!Errors.isEmpty()) {
        return res.status(400).json({ message: Errors.errors[0].msg });
      }
      const exist = await user.findOne({ email });

      if (exist) {
        return res.status(400).json({ message: "email already exist" });
      }
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "password less then 8 caracteres" });
      }
      const passwordHashed = await bcrypt.hash(password, 12);
      const newUser = await new user({
        firstName,
        lastName,
        //birthDate,
        gendre,
        password: passwordHashed,
        email,
      });
      newUser
        .save()
        .then(async (user) => {
          const token = await createAccessToken({ id: user._id });
          res.cookie("accessToken", token, {
            httpOnly: true,
            path: "/",
            maxAge: 30 * 24 * 60 * 60 * 1000, //30days
          });
          return res
            .status(200)
            .json({ message: "user created successfully", token });
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json({ message: "user doesnt created" });
        });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const User = await user.findOne({ email });
      if (!User) {
        return res.status(400).json({ message: "email doesnt exist" });
      }
      const isMatch = await bcrypt.compare(password, User.password);
      if (isMatch) {
        const token = createAccessToken({ id: User._id });
        res.cookie("accessToken", token, {
          httpOnly: true,
          path: "/",
          maxAge: 30 * 24 * 60 * 60 * 1000, //30days
        });
        return res.status(200).json({ token, user: User });
      } else {
        return res.status(400).json({ message: "password incorrect" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    res.clearCookie("token", { path: "/" });
    res.status(200).json({ message: "user logout" });
  },

  ResetPassword: async (req, res) => {
    const email = req.body.email;
    try {
      const User = await user.findOne({ email });
      console.log(User);
      if (!User) {
        return res
          .status(400)
          .json({ message: "there is no user with this email" });
      }

      var resetPasswordToken = await crypto.randomBytes(32).toString("hex");
      console.log(resetPasswordToken);
      User.resetPasswordToken = resetPasswordToken;
      User.resetPasswordExpires = Date.now() + 3600000;
      User.save()
        .then(async (user) => {
          console.log(user);
          const EmailData = {
            email: user.email,
            subject: "ResetPassword Email",
            text: `<p>ResetPassword <a href="http://localhost:3000/resetPassword/${user._id}/${user.resetPasswordToken}">link</a></p>`,
          };
          const EmailSent = await SendEmail(EmailData, res);
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json({ message: "failed reset password" });
        });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  },
  VerifeResetPasswordToken: async (req, res) => {
    const User = await user.findOne({
      resetPasswordToken: req.params.resetPasswordToken,
      resetPasswordTokenExpires: { $gt: Date.now() },
    });
    if (!User) {
      return res.status(400).json({ message: "Token expired" });
    }
    return res.status(200).json({ message: "u can chage ur password" });
  },

  newPassword: async (req, res) => {
    const password = req.body.password;
    const User = await user.findOne({
      resetPasswordToken: req.params.resetPasswordToken,
    });
    if (!User) {
      return res.status(404).json({ message: "user not found" });
    }
    const passwordHashed = await bcrypt.hash(password, 12);
    User.password = passwordHashed;
    User.resetPasswordToken = undefined;
    User.resetPasswordTokenExpires = undefined;
    User.save()
      .then((User) => {
        return res
          .status(200)
          .json({ message: "password changed successfully" });
      })
      .catch((err) => {
        return res.status(400).json({ message: "password doesnt changed" });
      });
  },
};
module.exports = AuthControllers;
