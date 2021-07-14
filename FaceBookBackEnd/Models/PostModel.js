const mongoose = require("mongoose");
const post = mongoose.Schema(
  {
    content: { type: String, required: true },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    photo: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("post", post);
