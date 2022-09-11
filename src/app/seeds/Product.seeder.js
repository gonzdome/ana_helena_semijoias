const { Seeder } = require('mongoose-data-seed');
const ProductModel = require('../models/ProductModel');

const data = [
  {
    name: 'Pulseira Infantil Menino - Leãozinho',
    type: 'pulseira',
    value: 10000,
    image_path: '../../image/products/pulseira/pulseira-infantil-menino-leaozinho.jpg',
    description: 'Banhado em ouro 18k ou Ródio/1 ano de garantia no banho da peça/ Antialérgica. Tempo de produção 30 dias úteis.',
  },
  {
    name: 'Anel Infantil Menino - Leãozinho',
    type: 'anel',
    value: 10000,
    image_path: '../../image/products/anel/anel-infantil-menino-leaozinho.jpg',
    description: 'Banhado em ouro 18k ou Ródio/1 ano de garantia no banho da peça/ Antialérgica. Tempo de produção 30 dias úteis.',
  },
];

class MaintainSeeder extends Seeder {
  async shouldRun() {
    return ProductModel.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return ProductModel.create(data);
  }
}

module.exports = MaintainSeeder;
