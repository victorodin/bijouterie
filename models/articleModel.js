const Sequelize = require('sequelize');
const sequelize = require('../server')

const Article = sequelize.define('article', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prix: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{timestamps: false})
module.exports = Article