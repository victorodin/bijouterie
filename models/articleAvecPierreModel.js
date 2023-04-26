const Sequelize = require("sequelize");
const sequelize = require("../server");

const ArticleAvecPierre = sequelize.define("article_avec_pierre", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER
},
  nbPierre: {
    type: Sequelize.INTEGER

  }
},{timestamps: false});

module.exports = ArticleAvecPierre;
