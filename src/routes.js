const routes = require('express').Router();

const UserController = require('./controllers/UserController');
const HomeController = require('./controllers/HomeController');

routes.get('/', HomeController.index);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

module.exports = routes;
