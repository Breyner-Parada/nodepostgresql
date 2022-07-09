'use strict';
const { DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE, userSchema } = require('../models/userModel');
const { CUSTOMER_TABLE, CustomerSchema  } = require('../models/customerModel');
const { CATEGORY_TABLE, categorySchema  } = require('../models/categoryModel');
const { PRODUCT_TABLE, productSchema  } = require('../models/productModel');
const { ORDER_TABLE } = require('../models/orderModel');
const { ORDER_PRODUCT_TABLE, OrderProductSchema  } = require('../models/orderProduct');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
    await queryInterface.createTable(ORDER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        References: {
          model: CUSTOMER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      }
    });
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
};
