const { Seeder } = require('mongoose-data-seed');
const ProductModel = require('../models/ProductModel');

const data = [
  {
    name: 'Pulseira Infantil Menina, Ursinho',
    type: 'pulseira',
    value: 10000,
    image_path: '../../image/products/pulseira/pulseira-infantil-menina-ursinho.png',
    description: 'Pulseira infantil menina, com ursinho. Banhado em ouro 18k ou Ródio/1 ano de garantia no banho da peça/ Antialérgica. Tempo de produção 30 dias úteis.'
  },
  {
    name: 'Pulseira Infantil Menina, Corações',
    type: 'pulseira',
    value: 10000,
    image_path: '../../image/products/pulseira/pulseira-infantil-menina-coracoes.png',
    description: 'Pulseira infantil menina, corações colorido. Banhado em ouro 18k ou Ródio/1 ano de garantia no banho da peça/ Antialérgica. Tempo de produção 30 dias úteis.'
  },
  {
    name: 'Pulseira Infantil Menino, Leãozinho',
    type: 'pulseira',
    value: 10000,
    image_path: '../../image/products/pulseira/pulseira-infantil-menino-leaozinho.png',
    description: 'Pulseira infantil menino, leãozinho. Banhado em ouro 18k ou Ródio/1 ano de garantia no banho da peça/ Antialérgica. Tempo de produção 30 dias úteis.'
  },
  {
    name: 'Colar Profissão Cabeleireira',
    type: 'colar',
    value: 10000,
    image_path: '../../image/products/colar/colar-profissao-cabeleireira.png',
    description: 'Colar profissão Cabeleireira. Banhado em ouro 18k ou Ródio/1 ano de garantia no banho da peça/ Antialérgica. Tempo de produção 30 dias úteis'
  }
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
