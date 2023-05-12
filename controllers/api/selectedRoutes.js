// const router = require('express').Router();
// const { User, UserPost } = require('../../models');

// router.get('/', async (req, res) => {
//   try {
//     const postData = await UserPost.findbyPk({
//       include: [{
//         model: User,
//         attributes: { exclude: ['password'] },
//         order: [['name', 'ASC']]
//       }]
//     });

//     const posts = postData.map((post) => post.get({ plain: true }));

//     console.log(posts);

//     res.render('homepage', {
//       posts,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });