const Sequelize = require('sequelize');
const sequelize = require('../server')

const Couleur = sequelize.define('couleur', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  nom: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},{timestamps: false});

  module.exports = Couleur