const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id',
        },
    },
    userPost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'UserPost',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Like',
  }
);

module.exports = Like;