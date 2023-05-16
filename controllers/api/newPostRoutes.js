const router = require('express').Router();
const { User, UserPost } = require('../../models');

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newpostData = await UserPost.create({
      title: req.body.title,
      body: req.body.message, 
      user_id: req.session.user_id,
      tag_id: req.body.tag_id,
      include: [{
        model: User,
        where: req.session.user_id,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });

    const newpost = newpostData.get({ plain: true });

    console.log(newpost);

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
      newpost,
      posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;