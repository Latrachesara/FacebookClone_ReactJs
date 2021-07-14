const express = require("express");
const router = express.Router();
const PostControllers = require("./../controllers/PostControllers");
router.post("/creation/post", PostControllers.CreationPost);
router.get('/allpost', PostControllers.allPost)
module.exports = router;