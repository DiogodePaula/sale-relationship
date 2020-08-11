import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';

import Product from '../app/models/Product';
import Brand from '../app/models/Brand';

const models = [Product, Brand];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    console.log('iniciou o banco');

    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
