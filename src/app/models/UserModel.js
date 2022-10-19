const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserModel = new mongoose.Schema(
  {
    username: {
      type: String
    },
    full_name: {
      type: String
    },
    email: {
      type: String
    },
    document: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

mongoose.plugin(mongoosePaginate);
module.exports = mongoose.model('users', UserModel);
