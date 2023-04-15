const dotenv = require("dotenv")
const mysql = require("mysql2");
dotenv.config({ path: "./config.env" });
const sequelize = require('./../server')
//import schema
const {Selection, Categorie, Article, Utilisateur, Role, Facture} = require('./../models/schema');


// connection
const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DIALECT,
});
// create database 
connection.query(`drop database ${process.env.DB_NAME}; create database ${process.env.DB_NAME}`, () => {
  connection.close();
  console.log("database: " + process.env.DB_NAME + " created!");
});

sequelize.sync({force: true})

