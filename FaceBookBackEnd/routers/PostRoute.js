const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// multer function ( Store the file and send the path in the req )

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
var upload = multer({ storage });

const PostControllers = require("./../controllers/PostControllers");
const auth = require("./../middlewares/auth");
router.post(
  "/creation/post",
  upload.single("PostPhoto"),

  PostControllers.CreationPost
);
router.get("/allpost", PostControllers.allPost);
module.exports = router;
