import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';

import Product from '../app/models/Product';
import Brand from '../app/models/Brand';

const models = [Brand, Product];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // eslint-disable-next-line no-console
    console.log('BOMBANDO');

    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new DataBase();

// model.associate: é para as models que não tem associação no banco, posso ter end points que nunca terão associação e ficaram sozinhos
// model.associate(com parâmetros): é para as tabelas que tem associação no banco
