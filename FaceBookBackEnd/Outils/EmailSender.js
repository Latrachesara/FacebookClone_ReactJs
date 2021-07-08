const nodemailer = require("nodemailer");

const SendEmail = async (data, res) => {
  console.log(data)
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ffacebookproject@gmail.com",
      pass: "fbprojet123",
    },
    secure: true,
  });

  const mailData = {
    to: data.email,
    from: "ffacebookproject@gmail.com",
    subject: data.subject,
    html: data.text,
  };

  transporter.sendMail(mailData, (error, info) => {
    
    if (error) {
      return res.status(400).json(error);
    
    } else return res.status(200).json(info);
  });
};
module.exports = SendEmail;
