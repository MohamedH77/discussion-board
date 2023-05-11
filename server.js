const path = require('path');
const express = require('express');
const routes = require('./controllers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: false,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use('/api', require('./controllers/api/'));
app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes);

// The line below prevents sequelize from syncing the database in a production environment.
// If you don't want it to sync locally either, change the true value to false at the end.
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

const forceValue = (process.env.NODE_ENV === "production") ? false : true
sequelize.sync({ force: forceValue }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
