const Sequelize = require('sequelize');
const sequelize = require('../server')

const NbCarats = sequelize.define('nb_carats', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
    valeur: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  },{timestamps: false});

  module.exports = NbCarats