const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    understanding: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id',
        },
    },
    dayThreads_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'DayThreads',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Comments'
  }
);

module.exports = Comments;
// change all