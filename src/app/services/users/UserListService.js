const UserModel = require('../../models/UserModel');

module.exports = async () => {
  const clientService = await UserModel.find({}, {
    username: 1,
    full_name: 1,
    document: 1,
    email: 1,
    password: 1,
  }).lean();

  return clientService;
};
