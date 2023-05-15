const router = require('express').Router();
const { User, UserPost, Like } = require("../models");
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
      },
    {
      model: User, through: Like, as: 'likes' 
    }]
    });
    console.log(req.params.id)

    const selectedPost = selectedPostData.get({ plain: true });

    console.log(selectedPost);
    console.log(req.session.user_id)


    let userLiked = false
    for (i=0; i<selectedPost.likes.length; i++){
      // console.log(selectedPost.likes[i].id
      if(selectedPost.likes[i].id==req.session.user_id)  userLiked = true
      
    }
    console.log(selectedPost.likes)

    const postData = await UserPost.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    // console.log(posts);


    res.render('selectedPost', {
      posts,
     selectedPost,
      userLiked,
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
