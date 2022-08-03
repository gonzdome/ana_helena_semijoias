const { Router } = require('express');
const UserCreateController = require('../controllers/UserCreateController');

const UserRouter = Router();

UserRouter.post('/create', UserCreateController);

module.exports = UserRouter;
