const mongoose = require("mongoose");
const user = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    //birthDate: { type: Date, required: false },
    gendre: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    invitations: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", user);
