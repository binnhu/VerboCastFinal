const {Sequelize, DataTypes} = require("sequelize");
const db = require ("../db");

const Administrador = db.define("Administrador", {
  email: {    
    type: DataTypes.STRING,
    primaryKey: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Administrador;