const {Sequelize, DataTypes} = require("sequelize");
const db = require ("../db");

const Administrador = db.define("Administrador", {
  id: {    
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Administrador;