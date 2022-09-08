const { Seeder } = require('mongoose-data-seed');
const AdminModel = require('../models/ProductModel');

const data = [
  {
    name: 'PULSEIRA CUSTOMIZÁVEL - TESTE',
    type: 'pulseira',
    image_path: '../../image/products/pulseira-customisavel.png',
    description: 'Pulseira que pode conter vários itens e pingentes para atender suas necessidades, podendo também conter o texto desejado nos pingentes',
  },
];

class MaintainSeeder extends Seeder {
  async shouldRun() {
    return AdminModel.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return AdminModel.create(data);
  }
}

module.exports = MaintainSeeder;
