const mongoose = require('mongoose');
const app = require('./app/app');

const { MONGO_DB_URL } = process.env;

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  app.listen(3000, () => console.log(`Listening on *${3000}`));
});
