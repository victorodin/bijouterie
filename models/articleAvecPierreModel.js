const Sequelize = require("sequelize");
const sequelize = require("../server");

const ArticleAvecPierre = sequelize.define("articleAvecPierre", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER
},
  nbPierres: {
    type: Sequelize.INTEGER,
    allowNull: false

  }
},{timestamps: false});

module.exports = ArticleAvecPierre;
