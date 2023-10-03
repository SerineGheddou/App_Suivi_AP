const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

module.exports = mysql.createPool({
    host : dbConfig.HOST,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB,
  });
