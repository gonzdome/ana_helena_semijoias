const ProductModel = require('../../models/ProductModel');

module.exports = async ({ type }) => {
  const data = type ? { type } : {};
  const productService = await ProductModel.find(data, {
    name: 1,
    type: 1,
    value: 1,
    image_path: 1,
    description: 1,
  }).lean();

  return productService;
};
