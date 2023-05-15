const { Like } = require('../models');

const LikeData = [
  {
    user_id: 2,
    userPost_id: 1,
  },
  {
    user_id: 1,
    userPost_id: 1,
  },
  {
    user_id: 3,
    userPost_id: 2,
  },
  {
    user_id: 4,
    userPost_id: 2,
  },
  {
    user_id: 5,
    userPost_id: 5,
  },
];

const seedLike = () => Like.bulkCreate(LikeData);

module.exports = seedLike;