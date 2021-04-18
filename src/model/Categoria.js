const { Sequelize, DataTypes } = require("sequelize");
const db = require ("../db");

const Categoria = db.define("Categoria", {
  id: {    
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Categoria;