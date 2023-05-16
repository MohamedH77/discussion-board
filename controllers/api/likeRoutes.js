const router = require("express").Router();
const { Like } = require("../../models");
const withAuth = require("../../utils/auth");

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const likeData = await Like.destroy({
        where: {
            userPost_id: req.params.id,
            user_id: req.session.user_id
        }
      });
  
      if (!likeData) {
        res.status(404).json({ message: 'No Like found with this id!' });
        return;
      }
  
      res.status(200).json(likeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post("/", withAuth, async (req, res) => {
    console.log(req.body)
    try {
      const newLike = await Like.create({
        user_id: req.session.user_id,
        userPost_id: req.body.buttonPostId
         
      });
      console.log(newLike);
      res.status(200).json(newLike);
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;