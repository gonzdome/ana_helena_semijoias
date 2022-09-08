const ProductListService = require('../../services/products/ProductListService');

module.exports = async (request, response) => {
  try {
    const listProducts = await ProductListService();

    return response.status(200).json(listProducts);
  } catch (error) {
    return console.log(error);
  }
};
