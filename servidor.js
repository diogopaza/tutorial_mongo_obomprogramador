const http = require('http');
const mongoose = require('mongoose');
/*
const inicio = () => {
    console.log('aguardando conexoes na porta 8000');
}


const mensagem = (request, response) => {
    response.end('OK');
}

server = http.createServer(mensagem);
server.listen('8000', inicio);
*/

mongoose.connect("mongodb://localhost/meudb", (err) => {
    if(err) return console.log(err)
})


UsuarioSchema = new mongoose.Schema({
    cpf : Number,
    nome: String,

})


Usuario = mongoose.model('usuarios',UsuarioSchema);

var novoUsuario = new Usuario({
    cpf : 5555,
    nome : "aaa",
})

novoUsuario.save(function(err, usuario){
    if(!err){
        console.log(usuario);
    }else{
        return console.log(err);
    }
})

/*
const server = http.createServer( (req, res) => {
    res.end("Ok na 8000");

}).listen('8000', () => {
    console.log('estou ouvindo na 8000');
})
*/
module.exports = Usuario;


