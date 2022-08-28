const jwt = require('jsonwebtoken');
const UserModel = require('../../models/UserModel');

module.exports = async (request, response) => {
  try {
    const { username, password } = request.body;
    const user = UserModel.find({ username, password });
    const token = jwt.sign(user, process.env.TOKEN_SECRET);

    return response.status(200).json({ token });
  } catch (error) {
    return console.log(error);
  }
};
