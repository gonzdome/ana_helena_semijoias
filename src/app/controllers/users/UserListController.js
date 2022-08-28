const UserListService = require('../../services/users/UserListService');

module.exports = async (request, response) => {
  try {
    const clientService = await UserListService();

    return response.status(200).json(clientService);
  } catch (error) {
    return console.log(error);
  }
};
