const ClientListService = require('../../services/clients/ClientListService');

module.exports = async (request, response) => {
  try {
    const listClients = await ClientListService();

    return response.status(200).json(listClients);
  } catch (error) {
    return console.log(error);
  }
};
