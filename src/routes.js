const routes = require('express').Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

module.exports = routes;
