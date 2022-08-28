const UserModel = require('../../models/UserModel');

module.exports = async (
  username,
  full_name,
  document,
  email,
  password,
) => {
  const userFind = await UserModel.findOne({
    $or: [
      { username },
      { full_name },
      { document },
      { email },
      { password },
    ],
  });
  if (userFind) { return 'Os dados inseridos já constam no sistema, por favor entrar em contato com o suporte!'; }

  const createUser = await UserModel.create({
    username,
    full_name,
    document,
    email,
    password,
  });

  return createUser;
};