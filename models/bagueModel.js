const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require('../server')
const Article = require('./articleModel')

/*
class Bague extends Model {}
Bague.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    } 
}, { sequelize, modelName: "bague" });

class Bague extends Model {}
Bague.init({
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true
  }
}, { sequelize });
*/



const Bague = sequelize.define('bague', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }   
},{
    timestamps: false, 
    //modelName: Article,
    //sequelize,
    //extends: Article
})
module.exports = Bague

