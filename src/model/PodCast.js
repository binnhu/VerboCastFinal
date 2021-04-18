const {Sequelize, DataTypes} = require("sequelize");
const Categoria = require("./Categoria")
const Administrador = require("./Administrador")
const Ministro = require("./Ministro")
const db = require ("../db");

const PodCast = db.define("PodCast", {
  id: {    
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  capa: DataTypes.STRING,
  titulo: DataTypes.STRING,
  descricao: DataTypes.STRING,
  arquivo: DataTypes.STRING,
  duracao: DataTypes.DOUBLE,
  data: DataTypes.STRING,

  CategoriaId: {
    type: DataTypes.INTEGER,
    references:{
      model: Categoria,
      key: 'id'
    }
  },

  AdministradorId: {
    type: DataTypes.INTEGER,
    references:{
      model: Administrador,
      key: 'id'
    }
  },

  MinistroId: {
    type: DataTypes.INTEGER,
    references:{
      model: Ministro,
      key: 'id'
    }
  }
}
);

PodCast.belongsTo(Categoria);
PodCast.belongsTo(Administrador);
PodCast.belongsTo(Ministro);
Categoria.hasMany(PodCast, {as: "categorias"});
Administrador.hasMany(PodCast, {as: "administradores"});
Ministro.hasMany(PodCast, {as: "ministros"});

module.exports = PodCast;