const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  const auth = request.headers.authorization;
  const tokenSplit = auth ? auth.split(' ')[1] : response.status(401).json({ error_message: 'Efetue o login primeiro!' });

  jwt.verify(tokenSplit, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return response.status(403).json({ error_message: 'Usuário inválido ou sessão expirada!' });
    response.locals.user = user;
    return next();
  });
};
