const router = require("express").Router();
const nodemailer = require("../../services/nodemailer");
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
    
        // Check if the email is already registered
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
        return res.status(400).send("Email already registered");
        }
    
        // Create new user
        const newUser = await User.create({ name, email, password });
    
        // Send welcome email
        const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: newUser.email,
        subject: "Welcome to my discussion board!",
        text: "Thank you for signing up. We look forward to hearing from you!",
        };
    
        await nodemailer.sendEmail(mailOptions);

        req.session.loggedIn = true;
        req.session.userId = newUser.id;
        res.redirect("/login");
    } catch (error) {
        next(error);
    }
})

module.exports = router;

