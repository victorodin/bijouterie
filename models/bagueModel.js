const Sequelize = require('sequelize');
const sequelize = require('../server')

const Bague = sequelize.define('bague', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }   
},{timestamps: false})
module.exports = Bague