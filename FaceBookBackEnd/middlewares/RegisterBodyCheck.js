const { body } = require("express-validator");
module.exports = [
  body("email").isEmail().withMessage("Invalid Email !"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password Must Containt 8 caractaires !"),
    body("firstName").notEmpty().withMessage("FirstName invalid ! "),
    body("lastName").notEmpty().withMessage("lastName invalid ! "),
    body("gendre").notEmpty().withMessage("gendre is Empty ! "),
];
