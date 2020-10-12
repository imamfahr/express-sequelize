const {Sequelize} = require('sequelize');
const sequelize = require('../config/db');


const Sku = sequelize.define('sku',{
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    brand_id: Sequelize.INTEGER
},{
    underscored:true,
    timestamps: false,
    freezeTableName: true
})

module.exports = Sku