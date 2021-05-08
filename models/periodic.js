'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Periodic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Periodic.init({
    period: DataTypes.STRING,
    quaterly: DataTypes.FLOAT,
    yearly: DataTypes.FLOAT,
    maturity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Periodic',
  });
  return Periodic;
};