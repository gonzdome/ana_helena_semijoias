const ClientModel = require('../../models/ClientModel');

module.exports = async () => {
  const clientService = await ClientModel.find({}, { full_name: 1, email: 1, document: 1 }).lean();

  return clientService;
};
