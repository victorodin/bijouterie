const Sequelize = require('sequelize');
const sequelize = require('../server')

const CollierChaineBracelet = sequelize.define('collier_chaine_bracelet', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    fermeture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    motif: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{timestamps: false})
module.exports = CollierChaineBracelet