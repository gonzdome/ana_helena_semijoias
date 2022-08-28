const { Router } = require('express');
const ClientCreateController = require('../controllers/clients/ClientCreateController');
const ClientListController = require('../controllers/clients/ClientListController');

const UserRouter = Router();

UserRouter.post('/create', ClientCreateController);

UserRouter.get('/list', ClientListController);

module.exports = UserRouter;
