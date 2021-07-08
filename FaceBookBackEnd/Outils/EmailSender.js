const nodemailer = require("nodemailer");

const SendEmail = async (data) => {
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
    console.log(error, info)
    if (error) {
      console.log(error)
      return false;
    } else return true;
  });
};
module.exports = SendEmail;
