const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRouters = require("./commentsRoutes");
const deleteUser = require("./deleteRoutes");

// const selectedPost = require('./selectedRoutes');

// router.use('/selectedpost', selectedPost);
router.use('/users', userRoutes);
router.use('/comments', commentsRouters);
router.use("/delete", deleteUser);


module.exports = router;
