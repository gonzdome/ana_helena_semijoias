const ClientCreateService = require('../../services/clients/ClientCreateService');

module.exports = async (request, response) => {
  try {
    const {
      full_name,
      email,
      document
    } = request.body;

    const clientCreateService = await ClientCreateService({
      full_name,
      email,
      document
    });

    return response.status(200).json(clientCreateService);
  } catch (error) {
    return console.log(error);
  }
};
