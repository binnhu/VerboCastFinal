const {Sequelize, DataTypes} = require("sequelize");
const db = require ("../db");

const Ministro = db.define("Ministro", {
  id: {    
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Ministro;