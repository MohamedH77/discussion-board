const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRouters = require("./commentsRoutes");
const deleteUser = require("./deleteRoutes");


router.use('/users', userRoutes);
router.use("/comments", commentsRouters);
router.use("/delete", deleteUser);

module.exports = router;
