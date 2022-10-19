const ClientModel = require('../../models/ClientModel');

module.exports = async ({ full_name, email, document }) => {
  const clientFind = await ClientModel.findOne({ full_name, email, document });
  if (clientFind) return { error_message: 'Identificamos que seus dados já constam no sistema, gostaria de efetuar o cadastro? Caso não queira, prosseguir com a compra!' };

  const clientCreate = await ClientModel.create({
    full_name,
    email,
    document
  });

  return clientCreate;
};
