const mongoose = require("mongoose");
const post = mongoose.Schema({
  description: { type: String, required: true },
  creationDate: { type: date, required: true },
  postedBy:{
    type:ObjectId,
    ref:"user"
  }
},
{timestamps:true});
module.exports = mongoose.model("post", post);
