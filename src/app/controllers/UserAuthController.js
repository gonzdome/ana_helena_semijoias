const jwt = require('jsonwebtoken');

module.exports = async (request, response) => {
  const { username, password } = request.body;
  // const user = UserModel.find({ username, password });
  const user = { username, password };
  const token = jwt.sign(user, process.env.TOKEN_SECRET);

  return response.status(200).json({ token });
};
