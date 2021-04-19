require('dotenv').config()

//Configuração ORM
const Administrador = require("./model/Administrador");
const Categoria = require("./model/Categoria");
const Ministro = require("./model/Ministro");
const PodCast = require("./model/PodCast");
const PodCastUsuario = require("./model/PodCastUsuario");
const Usuario = require("./model/Usuario");

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authorization = require("./authorization");

//Configuração API
const express = require("express"); 

const cors = require('cors');
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json({ message: 'API de PodCasts ativa!!!' })
});


//Rotas dos Ministros
app.get("/ministro", async (req, res) => {
  let ministros = await Ministro.findAll(); 
  res.json(ministros);
});

app.get("/ministro/:id", async (req, res) => {
  let ministro = await Ministro.findByPk(req.params.id); 
  res.json(ministro);
});

//Rotas das Categorias
app.get("/categoria", async (req, res) => {
  let categorias = await Categoria.findAll();
  res.json(categorias);
});

app.get("/categoria/:id", async (req, res) => {
  let categoria = await Ministro.findByPk(req.params.id); 
  res.json(categoria);
});

//Rotas dos Admins
app.get("/admin", async (req, res) => {
  let admins = await Administrador.findAll();
  res.json(admins);
});

app.get("/admin/:id", async (req, res) => {
  let admin = await Administrador.findByPk(req.params.id); 
  res.json(admin);
});

//Rotas dos Usuários
app.get("/user", async (req, res) => {
  let users = await Usuario.findAll();
  res.json(users);
});

app.get("/user/:id", async (req, res) => {
  let user = await Usuario.findByPk(req.params.id); 
  res.json(user);
});

//Rotas dos PodCasts
app.get("/podcast", async (req, res) => {
  let podcasts = await PodCast.findAll();
  res.json(podcasts);
});

app.get("/podcast/:id", async (req, res) => {
  let podcast = await PodCast.findByPk(req.params.id); 
  res.json(podcast);
});




Route("/user", app, new Service(Usuario), authorization);
Route("/categoria",app, new Service(Categoria), authorization);
Route("/ministro",app, new Service(Ministro), authorization);
Route("/podcast",app, new Service(PodCast), authorization);
Route("/podcastUsuario",app, new Service(PodCastUsuario), authorization);
Route("/administrador",app, new Service(Administrador), authorization);

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

async function gerarHash(password){
  return await bcryptjs.hash(password, 10);
}

app.post("/cadastrar", async (req, res) => {
  const {user, email, password} = req.body;
  const cadastro = await Usuario.create({user, email, password: (await gerarHash(password))});
  cadastro.password = undefined;
  res.send(cadastro);
});

app.post("/autenticar", async (req, res) => {
  const {email, password} = req.body;
  const usu = await Usuario.findByPk(email);
  if(!usu || !password){
    res.status(400).send("Credenciais Invalidas");
  } else if(bcryptjs.compareSync(password, usu.password)){
    const token = jwt.sign(
      {email},
      process.env.SECRET,
      {expiresIn: 3600}
    );
    res.send({email, token})
  }else{
    res.status(400).send("Credenciais Invalidas")
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})