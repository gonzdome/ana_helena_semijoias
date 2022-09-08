const ProductModel = require('../../models/ProductModel');

module.exports = async () => {
  const productService = await ProductModel.find({}, {
    name: 1,
    type: 1,
    image_path: 1,
    description: 1,
  }).lean();

  return productService;
};
