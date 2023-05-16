const router = require('express').Router();
const { User, UserPost, Comments, Like, Tag } = require("../models");
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await UserPost.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const selectedPostData = await UserPost.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: User, through: Like, as: 'likes' 
      },
      {
        model: Tag, 
      }]
    });
    console.log(req.params.id)

    const selectedPost = selectedPostData.get({ plain: true });

    console.log(selectedPost);
    console.log(req.session.user_id)


    let userLiked = false
    for (i=0; i<selectedPost.likes.length; i++){
      if(selectedPost.likes[i].id==req.session.user_id)  userLiked = true
    }
    console.log(selectedPost.likes)

    const postData = await UserPost.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    const commentData = await Comments.findAll({
      where: {userPost_id: req.params.id},
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    console.log(comments);

    res.render('selectedPost', {
      posts,
      selectedPost,
      comments,
      userLiked,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
    });

     console.log(userData);
    const user = userData.get({ plain: true });


    if (!userData) {
      res
        .status(400)
        .json({ message: 'No user data found, please log in and try again' });
      return;
    }

    const postData = await UserPost.findAll({
      where: { user_id: req.session.user_id },
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('profile', {
      user,
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/html', withAuth, async (req, res) => {
  try {
    const postData = await UserPost.findAll({
      where: {tag_id: 1 },
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/css', withAuth, async (req, res) => {
  try {
    const postData = await UserPost.findAll({
      where: {tag_id: 2 },
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/javascript', withAuth, async (req, res) => {
  try {
    const postData = await UserPost.findAll({
      where: {tag_id: 3 },
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/node', withAuth, async (req, res) => {
  try {
    const postData = await UserPost.findAll({
      where: {tag_id: 4 },
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/other', withAuth, async (req, res) => {
  try {
    const postData = await UserPost.findAll({
      where: {tag_id: 5 },
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      },
      {
        model: Tag, 
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup')
});

module.exports = router;
