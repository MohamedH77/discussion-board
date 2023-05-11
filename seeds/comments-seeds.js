const { Comments } = require('../models');

const commentsData = [
  {
    comment: 'For help in HTML ask pTag',
    user_id: 2,
    userPost_id: 1,
  },
  {
    comment: 'For CSS just make it look nice',
    user_id: 1,
    userPost_id: 2,
  },
  {
    comment: 'For JS use functions',
    user_id: 3,
    userPost_id: 3,
  },
  {
    comment: 'For NODE run npm install',
    user_id: 4,
    userPost_id: 4,
  },
  {
    comment: 'Just order pizza',
    user_id: 5,
    userPost_id: 5,
  },
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
