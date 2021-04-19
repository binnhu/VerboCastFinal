const {DataTypes, Sequelize} = require("sequelize");
const db = require ("../db");

const Usuario = db.define("Usuario", {
    email: {    
    type: DataTypes.STRING,
    primaryKey: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Usuario;