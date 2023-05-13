const Sequelize = require('sequelize');
const sequelize = require('../server')

const BouclesDoreillesAvecPerle = sequelize.define('bouclesDoreillesAvecPerle', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    nbPerles: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{timestamps: false})
module.exports = BouclesDoreillesAvecPerle