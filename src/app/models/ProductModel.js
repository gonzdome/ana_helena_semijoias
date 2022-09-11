const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ProductModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    value: {
      type: Number,
    },
    image_path: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

mongoose.plugin(mongoosePaginate);
module.exports = mongoose.model('products', ProductModel);
