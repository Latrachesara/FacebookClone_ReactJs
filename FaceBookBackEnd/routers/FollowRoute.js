const express = require("express");
const router = express.Router();
const auth = require("./../middlewares/auth");
const FollowController = require("./../controllers/FollowControllers");
router.post("/send/invitation", auth, FollowController.SendInvitation);

module.exports = router;
