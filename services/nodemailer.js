const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();


const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_ID,
    process.env.REDIRECT_URL
);


oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});

const accessToken = oAuth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        type: "OAuth2",
        user: process.env.EMAIL_ADDRESS,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
    }
});

function sendEmail(options){
    return new Promise((res, rej) => {
        transporter.sendMail(options, (err, info) => {
            if(err){
                rej(err);
            } else {
                res(info);
            }
        });
    });
}

module.exports = { sendEmail };
