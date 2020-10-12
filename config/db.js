const {Sequelize} = require('sequelize');


const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: 'Tigapuluh301096##',
    database: 'shop'
});

module.exports = sequelize