const router = require('express').Router();
const { User, UserPost } = require("../models");
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await UserPost.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('homepage', {
      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const selectedPostData = await UserPost.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });
    console.log(req.params.id)

    const selectedPost = selectedPostData.get({ plain: true });

    console.log(selectedPost);

    const postData = await UserPost.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);


    res.render('selectedPost', {
      posts,
      selectedPost,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup')
});

module.exports = router;
