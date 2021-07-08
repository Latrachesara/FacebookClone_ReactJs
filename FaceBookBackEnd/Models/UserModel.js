const mongoose = require("mongoose");
const user = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  //birthDate: { type: Date, required: false },
  gendre: { type: String, required: false },
  phoneNumber: { type: Number, required: false },
  isVerified: { type: Boolean, default: false },
  resetPasswordToken: { type: String, required: false },
  resetPasswordExpires: { type: Date, required: false },
});
module.exports = mongoose.model("user", user);
