const Sequelize = require('sequelize');
const sequelize = require('../server')

const Role = sequelize.define('role', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'client'
    }
})
module.exports = Role


