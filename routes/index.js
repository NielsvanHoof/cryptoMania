const login = require('./login');
const register = require('./register');
const portfolio = require('./portfolio');
const home = require('./home.js');

module.exports = app => {
  app.use('/login', login);
  app.use('/portfolio', portfolio);
  app.use('/register',register);
  app.use('/',home);
}
