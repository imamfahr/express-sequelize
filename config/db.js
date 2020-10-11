const {Sequelize} = require('sequelize');


const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: PASS_SQL,
    database: 'shop'
});

module.exports = sequelize