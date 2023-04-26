const Sequelize = require('sequelize');
const sequelize = require('../server')

const Gravure = sequelize.define('gravure', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    } 
},{timestamps: false})
module.exports = Gravure
