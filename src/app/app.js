const express = require('express');

const UserRouter = require('./routes/UserRouter');
const ClientRouter = require('./routes/ClientRouter');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  routes() {
    this.server.use('/user', UserRouter);
    this.server.use('/client', ClientRouter);
  }

  middleware() {
    this.server.use(express.json());
  }
}

module.exports = new App().server;
