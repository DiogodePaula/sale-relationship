import Sequelize, { Model } from 'sequelize';

class Brand extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        // tablesName: 'brands', esse método "força" o sequelize a procurar por esse nome.
      }
    );
    return this;
  }
}

export default Brand;
// primeiro criamos a tabela de brand, para a tabela de products ter onde se referenciar
