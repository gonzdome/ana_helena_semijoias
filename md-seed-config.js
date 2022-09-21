/* eslint-disable no-return-await */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Products = require('./src/app/seeds/Product.seeder');

dotenv.config();

const { MONGO_DB_URL = null } = process.env;

if (!MONGO_DB_URL) {
  console.log('Environment MONGO_DB_URL not found');
  console.log('Process stopped');
  process.exit();
}

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
module.exports.seedersList = {
  Products
};

/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
module.exports.connect = async () => mongoose.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
