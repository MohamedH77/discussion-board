const { User } = require('../models');

const userData = [
  {
    fname: "Sal",
    lname: "Smith",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    fname: "Lernantino",
    lname: "Anderson",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    fname: "Amiko",
    lname: "Hayes",
    email: "amiko2k20@aol.com",
    password: "password12345"
  },
  {
    fname: "Jordan",
    lname: "Johnson",
    email: "jordan99@msn.com",
    password: "password12345"
  },
  {
    fname: "Blake",
    lname: "Stone",
    email: "the_blake@yahoo.com",
    password: "password12345"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
