const {Sequelize} = require('sequelize');
const sequelize = require('../config/db');

const Sku = require('../models/Sku')

const Brand = sequelize.define('sku',{
    name: Sequelize.STRING,
},{
    underscored:true,
    timestamps: false,
    freezeTableName: true
})

module.exports = Brand  