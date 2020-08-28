const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

const db = require('../models')

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      // Defines As Foreign Key For Product Model Id
      references: {
        model: db.Product,
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // Defines As Foreign Key For Tag Model Id
      references: {
        model: db.Tag,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
