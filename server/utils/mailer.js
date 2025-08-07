const nodemailer = require("nodemailer");

async function sendEmail(to, subject, body) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"AI Emailer" <${process.env.EMAIL}>`,
    to,
    subject,
    text: body,
  });
}

module.exports = { sendEmail };
