const Sequelize = require("sequelize");
const sequelize = require('../server') // connexion

const Utilisateur = sequelize.define('utilisateur',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlpha: true
    },
    prenom: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlpha: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    },
    telephone: {
        type: Sequelize.STRING,
        allowNull: false,
        isNumeric: true
    },
    adresse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

},{timestamps: false})
module.exports = Utilisateur;


