const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(process.env.MONGODB_URI, MONGODB_OPTIONS)
  .then((data) => {
    console.log("we are connected to db");
  })
  .catch(() => {
    console.log("error");
  });

module.exports = mongoose;