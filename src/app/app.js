const express = require('express');
const Cors = require('cors');

const UserRouter = require('./routes/UserRouter');
const ClientRouter = require('./routes/ClientRouter');
const ProductRouter = require('./routes/ProductRouter');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  routes() {
    this.server.use('/users', UserRouter);
    this.server.use('/clients', ClientRouter);
    this.server.use('/products', ProductRouter);
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(Cors({ origin: '*' }));
  }
}

module.exports = new App().server;
