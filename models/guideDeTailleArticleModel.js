const Sequelize = require('sequelize');
const sequelize = require('../server')

const GuideDeTailleArticle = sequelize.define('guideDeTailleArticle', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    valeur_mesure: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unite_mesure: {
        type: Sequelize.STRING,
        allowNull: false
    } 
},{timestamps: false})
module.exports = GuideDeTailleArticle
