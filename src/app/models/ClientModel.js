const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ClientModel = new mongoose.Schema(
  {
    full_name: {
      type: String,
    },
    email: {
      type: String,
    },
    document: {
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
module.exports = mongoose.model('clients', ClientModel);
