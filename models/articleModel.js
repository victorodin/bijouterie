const Sequelize = require('sequelize');
const sequelize = require('../server')

const Article = sequelize.define('article', {
    id: {
        //type: Sequelize.UUID,
        //defaultValue: Sequelize.UUIDV4,
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
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true,
    }
},{timestamps: false})
module.exports = Article