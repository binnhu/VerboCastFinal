const {DataTypes, Sequelize} = require("sequelize");
const db = require ("../db");

const Usuario = db.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  email: {    
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Usuario;