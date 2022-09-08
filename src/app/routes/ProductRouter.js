const { Router } = require('express');
const ProductListController = require('../controllers/products/ProductListController');

const UserRouter = Router();

UserRouter.get('/list', ProductListController);

module.exports = UserRouter;
