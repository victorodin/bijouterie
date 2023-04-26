const Sequelize = require('sequelize');
const sequelize = require('../server')

const BouclesDoreilles = sequelize.define('boucles_d_oreilles', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    forme: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{timestamps: false})
module.exports = BouclesDoreilles