const Sequelize = require('sequelize');
const sequelize = require('../server')

const Commande = sequelize.define('commande', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    date:{
        type: Sequelize.DATE,
        default: Date.now(),
        allowNull: false
    },
    montant: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
},{timestamps: false})
module.exports = Commande

