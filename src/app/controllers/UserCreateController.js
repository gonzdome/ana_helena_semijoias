const UserModel = require('../models/UserModel');

module.exports = async (request, response) => {
  try {
    const {
      username,
      full_name: fullName,
      document,
      email,
      password,
    } = request.body;

    const createUser = await UserModel.create({
      username,
      full_name: fullName,
      document,
      email,
      password,
    });

    return response.status(200).json(createUser);
  } catch (err) {
    return console.log(err);
  }
};
