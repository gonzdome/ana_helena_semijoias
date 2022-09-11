const { Router } = require('express');
const UserCreateController = require('../controllers/users/UserCreateController');
const UserAuthController = require('../controllers/users/UserAuthController');
const UserListController = require('../controllers/users/UserListController');

const UserRouter = Router();

UserRouter.post('/create', UserCreateController);

UserRouter.post('/auth', UserAuthController);

UserRouter.get('/list', UserListController);

module.exports = UserRouter;
