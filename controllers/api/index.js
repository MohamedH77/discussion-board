const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRouters = require("./commentsRouter");

router.use('/users', userRoutes);
router.use("/comments", commentsRouters);

module.exports = router;
