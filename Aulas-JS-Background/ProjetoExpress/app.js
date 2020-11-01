const e = require("express");
const express = require("express");
let app = express();

// console.log(app)


//instalar o express em cada projeto que for trabalhar
//comando npm install express --save

// usando app.listen
app.get("/", (req, res)=>res.send("Olá mundo!"))
app.listen(3000, () =>console.log("Servidor rodando na porta 3000"))



