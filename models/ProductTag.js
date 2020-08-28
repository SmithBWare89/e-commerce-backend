const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Import Models
const Tag = require('./Tag');
const Product = require('./Product');

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
        model: Product,
        key: 'id'
      },
      validate: {
        isNumeric: true
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // Defines As Foreign Key For Tag Model Id
      references: {
        model: Tag,
        key: 'id'
      },
      validate: {
        isNumeric: true
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
