const user = require("./../Models/UserModel");
const SendEmail  = require("./../Outils/EmailSender");
const UserControllers = {
  getUser: async (req, res) => {
    try {
      const user_id = req.params.id;
      const User = await user.findById(user_id);
      if (User) {
        return res.status(200).json({ user: User });
      } else {
        return res.status(400).json({ message: "user dosent exist" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  emailVerfication: async (req, res) => {
    try {
      const exist = await user.findById(req.params.id);
      if (!exist) {
        return res.status(404).json({ message: " user not found" });
      }
      const EmailData = {
        email: exist.email,
        subject: "Verfication Email",
        text: `<p>Verfication <a href="http://localhost:3000/verifEamil/${exist._id}">link</a></p>`,
      };
      const EmailSent = await SendEmail(EmailData, res);
   
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  getAllUsers: async (req, res) => {
    const Users = await user.find();
    res.json(Users);
  },
};

module.exports = UserControllers;
