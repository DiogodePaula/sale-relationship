import Sequelize, { Model } from 'sequelize';

class Product extends Model {
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
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  //
  // static associate(models) {
  //   this.belongsTo(models.Brand, {
  //     as: 'brand',
  //     foreignKey: 'brand_uid',
  //   });
  // }
}

export default Product;
