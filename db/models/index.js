const { User, userSchema } = require('./userModel');
const { Customer, CustomerSchema } = require('./customerModel');
const { Product, productSchema } = require('./productModel');
const { Category, categorySchema } = require('./categoryModel');
const { Order, OrderSchema } = require('./orderModel');
const { OrderProduct, OrderProductSchema } = require('./orderProduct');

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  Category.init(categorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));


  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
