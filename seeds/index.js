const seedComments = require('./comments-seeds');
const seedUserPost = require('./userPost-seeds');
const seedTag = require('./tag-seeds');
const seedUser = require('./user-seeds');
const seedLike = require('./like-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  await seedTag();
  console.log('\n----- Tag SEEDED -----\n');

  await seedUserPost();
  console.log('\n----- UserPost SEEDED -----\n');

  await seedComments();
  console.log('\n----- Comments SEEDED -----\n');

  await seedLike();
  console.log('\n----- Like SEEDED -----\n');

  process.exit(0);
};

seedAll();
