const Sequelize = require("sequelize");
const sequelize = require('../server') // connexion

const Categorie = sequelize.define('categorie',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false
      }
})
module.exports = Categorie;

