const ClientService = require('../../services/products/ProductCreateService');

module.exports = async (request, response) => {
  try {
    const {
      full_name,
      email,
      document
    } = request.body;

    const clientService = await ClientService({
      full_name,
      email,
      document
    });

    return response.status(200).json(clientService);
  } catch (error) {
    return console.log(error);
  }
};
