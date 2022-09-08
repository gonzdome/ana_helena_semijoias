const UserCreateService = require('../../services/users/UserCreateService');

module.exports = async (request, response) => {
  try {
    const {
      username,
      full_name,
      document,
      email,
      password,
    } = request.body;

    const userCreateService = await UserCreateService(
      username,
      full_name,
      document,
      email,
      password,
    );

    return response.status(200).json(userCreateService);
  } catch (error) {
    return console.log(error);
  }
};
