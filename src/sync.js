require('dotenv').config()
const { Op, Model } = require('sequelize');
let db = require("./db");
const Administrador = require("./model/Administrador");
const Categoria = require("./model/Categoria");
const Ministro = require("./model/Ministro");
const PodCast = require("./model/PodCast");
const PodCastUsuario = require("./model/PodCastUsuario");
const Usuario = require("./model/Usuario");

async function sincronizar() {
    await db.sync({force: true});
}

/*
async function inserir() {
  let ministro = await Ministro.create({nome: 'Marco Jatobá'});
  let categoria = await Categoria.create({nome: 'Fé'});
  let administrador = await Administrador.create({user: 'JM'});
  PodCast.create({CategoriaId: categoria.id,
                  AdministradorId: administrador.id,
                  MinistroId: ministro.id});


}*/

// 
// inserir(a1);

/*async function consultar() {
    let ministros =  await Ministro.findAll({
        where: {
            nome: {
                [Op.like]: "Monique%"
            }
        }
    }
    );
    console.log(ministros);
  
    let ministro = await Ministro.findOne(
        {
            where: {
                id:4
            }
        }
    );
    //let ed = Edicao.findOne();
    //ed.getLivro();
    //console.log((await ministro.getPodCasts()));
}*/

sincronizar();
//inserir();
//consultar();