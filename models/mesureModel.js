const Sequelize = require('sequelize');
const sequelize = require('../server')

const Mesure = sequelize.define('mesure', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    mesure: {
        type: Sequelize.STRING,
        allowNull: true
    }
    
},{timestamps: false})
module.exports = Mesure
