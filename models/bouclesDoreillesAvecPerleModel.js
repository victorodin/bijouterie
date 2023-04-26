const Sequelize = require('sequelize');
const sequelize = require('../server')

const BouclesDoreillesAvecPerle = sequelize.define('boucles_d_oreilles_avec_perle', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    nb_perles: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{timestamps: false})
module.exports = BouclesDoreillesAvecPerle