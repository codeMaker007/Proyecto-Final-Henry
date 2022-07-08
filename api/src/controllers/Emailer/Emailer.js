const nodemailer = require("nodemailer");
const {EMAIL_PASSWORD, EMAIL} = process.env


async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: EMAIL, 
      pass: EMAIL_PASSWORD, 
    },
  });

  return transporter

}

main().catch(console.error);

module.exports = {
    main
}