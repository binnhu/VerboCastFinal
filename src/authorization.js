const jwt = require("jsonwebtoken");

module.exports = async(req, res, next) => {
  const auth = req.headers.authorization;
  if(!auth){
    return res.send(401).send("Sem permissão para tal ação");
  }

  const token = auth.split(" ")[1];
  
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err){
      return res.send(401).send("Sem permissão para tal ação");
    }
    req.email = decoded.email;
  })



  next()
}