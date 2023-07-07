const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MuscleGroup extends Model {}

MuscleGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ending_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'muscleGroup',
  }
);

module.exports = MuscleGroup;
