module.exports = async (request, response) => {
  try {
    const { email, password } = request.body;

    console.log('user create', email, password);

    return response.status(200).json({ email, password });
  } catch (err) {
    console.log(err);
  }
};
