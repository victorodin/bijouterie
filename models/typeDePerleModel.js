const Sequelize = require('sequelize');
const sequelize = require('../server')

const TypeDePerle = sequelize.define('type_de_perle', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
},{timestamps: false})
module.exports = TypeDePerle