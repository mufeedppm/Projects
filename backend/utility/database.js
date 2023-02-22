const Sequelize = require('sequelize');

const sequelize = new Sequelize('SellerAdmin','root','password',{
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;