const router = require('express').Router();
const { User, UserPost } = require('../../models');
const nodemailer = require("../../services/nodemailer")

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const userData = await User.create(req.body);
    console.log(userData)

    const mailOptions = {
      form: "group4@teleworm.us",
      to: userData.email,
      subject: "Welcome to my discussion board!",
      text: "Thank you for signing up. We look forward to hearing from you!",
    };

    let mail = await nodemailer.sendEmail(mailOptions);
    console.log(mail)

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({err});
  }
});

router.put('/', async (req, res) => {
  console.log('hi there ' + req.body);
  try {
    const userData = await User.findByPk(req.session.user_id);

    console.log(userData);
     
    userData.update(req.body)

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});




router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
