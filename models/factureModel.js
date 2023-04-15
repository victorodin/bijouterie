const Sequelize = require('sequelize');
const sequelize = require('../server')

const Facture = sequelize.define('facture', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    montant: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports = Facture

