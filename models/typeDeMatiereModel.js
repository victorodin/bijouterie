const Sequelize = require('sequelize');
const sequelize = require('../server')

const TypeDeMatiere = sequelize.define('type_de_matiere', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    matiere: {
        type: Sequelize.STRING,
        allowNull: false
    } 
},{timestamps: false})
module.exports = TypeDeMatiere
