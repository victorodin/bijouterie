const Sequelize = require('sequelize');
const sequelize = require('../server')

const NbCarats = sequelize.define('nbCarat', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
    valeur: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },{timestamps: false});

  module.exports = NbCarats