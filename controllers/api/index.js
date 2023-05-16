const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRouters = require("./commentsRoutes");
const deleteUser = require("./deleteRoutes");

// const selectedPost = require('./selectedRoutes');
const likeRouters = require("./likeRoutes");
const authController = require("./authController");
const newPost = require('./newPostRoutes');

router.use('/newpost', newPost);
router.use('/users', userRoutes);
router.use('/comments', commentsRouters);
router.use("/delete", deleteUser);


module.exports = router;
