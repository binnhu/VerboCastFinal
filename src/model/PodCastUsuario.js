const {Sequelize, DataTypes} = require("sequelize");
const db = require ("../db");

const PodCast = require("./PodCast");
const Usuario = require("./Usuario");

const PodCastUsuario = db.define("PodCastUsuario", 
  {
    PodCastId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: PodCast,
        key: 'id'
      }
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Usuario,
        key: 'email'
      }
    }
  }
);

PodCast.belongsToMany(Usuario, {through:PodCastUsuario, as: 'usuarios'});
Usuario.belongsToMany(PodCast, {through:PodCastUsuario, as: 'podcasts'});

module.exports = PodCastUsuario;