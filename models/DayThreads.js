const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DayThreads extends Model {}

DayThreads.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'DayThreads'
  }
);

module.exports = DayThreads;
