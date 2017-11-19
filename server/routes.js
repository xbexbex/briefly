const user = require('./api');

module.exports = (app) => {
  app.use('/api', user);
}