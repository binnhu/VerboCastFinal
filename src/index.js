require('dotenv').config()
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const Administrador = require("./model/Administrador");
const Categoria = require("./model/Categoria");
const Ministro = require("./model/Ministro");
const PodCast = require("./model/PodCast");
const PodCastUsuario = require("./model/PodCastUsuario");
const Usuario = require("./model/Usuario");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: 'API de PodCasts ativa!!!' })
});

/*app.get("/livro", async (req, res) => {
  let livros = await Livro.findAll(); 
  res.json(livros);
});

app.get("/livro/:id", async (req, res) => {
  let livro = await Livro.findByPk(req.params.id); 
  res.json(livro);
});
*/

Route("/usuario",app, new Service(Usuario));
Route("/categoria",app, new Service(Categoria));
Route("/ministro",app, new Service(Ministro));
Route("/podcast",app, new Service(PodCast));
Route("/podcastUsuario",app, new Service(PodCastUsuario));
Route("/administrador",app, new Service(Administrador));

/*app.get("/livro/:id/edicao", async (req, res) => {
  const edicoes = await Edicao.findAll({where:{LivroId:req.params.id}});
  res.send({edicoes});
});

app.get("/livro/:id/disciplina", async (req, res) => {
  const disciplinas = await Livro.findAll(
    {
      where:{id:req.params.id}, 
      include:[
        {model: Disciplina, as:'disciplinas'}
      ]
    }
  );
  res.send(disciplinas)

}) 
*/


app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})