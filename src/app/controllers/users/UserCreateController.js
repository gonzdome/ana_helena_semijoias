const UserService = require('../../services/users/UserCreateService');

module.exports = async (request, response) => {
  try {
    const {
      username,
      full_name,
      document,
      email,
      password,
    } = request.body;

    const userService = await UserService(
      username,
      full_name,
      document,
      email,
      password,
    );

    return response.status(200).json(userService);
  } catch (error) {
    return console.log(error);
  }
};
