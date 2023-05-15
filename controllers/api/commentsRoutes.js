const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comments } = require("../../models");


router.post("/comments", withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      comment: req.body.comment,
      UserId: req.session.user_id,
       // set the UserId foreign key to the logged in user's id
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

