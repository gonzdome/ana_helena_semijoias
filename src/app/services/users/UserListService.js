const UserModel = require('../../models/UserModel');

module.exports = async () => {
  const clientService = await UserModel.find().lean();

  return clientService;
};
