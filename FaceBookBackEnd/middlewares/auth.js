const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

function authrization(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({ status: "error", message: "Unauthorized" });

    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified.id;

    next();
  } catch (err) {
    res.status(401).json({ status: "error", message: "Unauthorized" });
  }
}

module.exports = authrization;
