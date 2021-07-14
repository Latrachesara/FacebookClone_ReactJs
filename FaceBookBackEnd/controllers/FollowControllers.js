const user = require("./../Models/UserModel");

const FollowController = {
  SendInvitation: async () => {
    const { sender, reciver } = req.body;
    try {
      user
        .findByIdAndUpdate(reciver, { $push: { invitations: sender } })
        .then(() => {
          return res.status(200).json({ message: "Invitation sent !" });
        })
        .catch((err) => {
          return res.status(400).json({ message: err.message });
        });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
module.exports = FollowController;
