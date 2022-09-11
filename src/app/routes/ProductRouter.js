const { Router } = require('express');
const ProductListController = require('../controllers/products/ProductListController');
const AccessAuthMiddleware = require('../middlewares/AccessAuthMiddleware');

const UserRouter = Router();

UserRouter.get('/list', AccessAuthMiddleware, ProductListController);

module.exports = UserRouter;
