const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  const auth = request.headers.authorization;
  const tokenSplit = auth ? auth.split('')[1] : response.status(401).json('Efetue o login primeiro!');

  jwt.verify(tokenSplit, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return response.status(403).json('Usuário inválido!');
    response.locals.user = user;
    return next();
  });
};
