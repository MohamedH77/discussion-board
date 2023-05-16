const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const createTransporter = (testaccount) => {
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testaccount.user,
      pass: testaccount.pass,
    },
  })
}

async function sendEmail(options) {
    let testaccount = await nodemailer.createTestAccount();
    console.log("nodemailer test account", testaccount);
    const transporter = createTransporter(testaccount);
    return new Promise((resolve, reject) => {
    transporter.sendMail(options, (error, info) => {
        console.log(error)
        console.log(info)
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
}

module.exports = { sendEmail };
