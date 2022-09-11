const ProductListService = require('../../services/products/ProductListService');

module.exports = async (request, response) => {
  try {
    const { type = null } = request.query;
    const listProducts = await ProductListService({ type });

    return response.status(200).json(listProducts);
  } catch (error) {
    return console.log(error);
  }
};
