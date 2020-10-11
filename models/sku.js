const {Sequelize} = require('sequelize');
const sequelize = require('../config/db');

const Sku = sequelize.define('sku',{
    name: Sequelize.STRING,
},{
    underscored:true,
    timestamps: false,
    freezeTableName: true
})

module.exports = Sku