const routes = require('express').Router();

routes.get('/', (req, res) => {
  return res.send('Hello World');
});

module.exports = routes;
