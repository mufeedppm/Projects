const Sequelize = require('sequelize') ;

const sequelize =require('../utility/database');

const Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    product: Sequelize.STRING,
    price: Sequelize.FLOAT,
    category: Sequelize.STRING
  });
  
  module.exports = Product;