const express = require('express');

const UserRouter = require('./routes/UserRouter');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  routes() {
    this.server.use('/user', UserRouter);
  }

  middleware() {
    this.server.use(express.json());
  }
}

module.exports = new App().server;
