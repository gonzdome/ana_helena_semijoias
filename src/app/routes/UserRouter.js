const { Router } = require('express');
const AccessAuthMiddleware = require('../middlewares/AccessAuthMiddleware');
const UserCreateController = require('../controllers/UserCreateController');
const UserAuthController = require('../controllers/UserAuthController');

const UserRouter = Router();

UserRouter.post('/create', UserCreateController);

UserRouter.post('/auth', UserAuthController);

module.exports = UserRouter;
