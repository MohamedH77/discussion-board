const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRouters = require("./commentsRoutes");
const deleteUser = require("./deleteRoutes");
const likeRouters = require("./likeRoutes");
const newPost = require('./newPostRoutes');

router.use('/newpost', newPost);
router.use('/users', userRoutes);
router.use('/comments', commentsRouters);
router.use("/delete", deleteUser);
router.use('/like', likeRouters);

module.exports = router;
