const ClientModel = require('../../models/ClientModel');

module.exports = async () => {
  const clientService = await ClientModel.find().lean();

  return clientService;
};
