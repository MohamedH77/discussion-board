const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'HTML',
  },
  {
    tag_name: 'CSS',
  },
  {
    tag_name: 'JS',
  },
  {
    tag_name: 'NODE',
  },
  {
    tag_name: 'OTHER',
  },
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
