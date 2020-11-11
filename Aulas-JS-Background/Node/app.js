const http = require('http')
http.createServer((req, res)=>{
res.writeHead(200, {"Contante-Type":"text/plain"})

switch(req.url){
    case "/":
        res.end("Você está na página home!")
        break;
    case "/contato":
        res.end("Você está na página contato!");
        break;
    default:
        res.end("Você está no nosso servidor!")
        break;
}
res.end("Servidor esta rodando!")

}).listen(3000)

//control+C para voltar o terminal