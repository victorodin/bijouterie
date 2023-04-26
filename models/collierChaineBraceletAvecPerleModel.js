const Sequelize = require('sequelize');
const sequelize = require('../server')

const CollierChaineBraceletAvecPerle = sequelize.define('collier_chaine_bracelet_avec_perle', {
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
module.exports = CollierChaineBraceletAvecPerle