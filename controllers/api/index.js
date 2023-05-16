const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRouters = require("./commentsRoutes");
const deleteUser = require("./deleteRoutes");
const likeRouters = require("./likeRoutes");
const authController = require("./authController");
const newPost = require('./newPostRoutes');

router.use('/newpost', newPost);
router.use('/users', userRoutes);
router.use('/comments', commentsRouters);
router.use('/like', likeRouters);
router.use("/delete", deleteUser);
router.use("/auth", authController);

module.exports = router;
