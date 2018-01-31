
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/bancoArtista", (err) => {
    if(err) return console.log(err)
})

ArtistaSchema = new mongoose.Schema({
    nome : String,
    pais: String,

})

Artista = mongoose.model('artistas',ArtistaSchema);


module.exports = Artista;
/*
novoArtista = new Artista({
    nome:'joazinho',
    pais:'belgica'
})

novoArtista.save(function(err, artista){
    if(err) console.error(err)
    console.log(artista)
})

novoArtista = new Artista({
    nome:'beto',
    pais:'argentina'
})

novoArtista.save(function(err, artista){
    if(err) console.error(err)
    console.log(artista)
})

novoArtista = new Artista({
    nome:'miguela',
    pais:'brazil'
})

novoArtista.save(function(err, artista){
    if(err) console.error(err)
    console.log(artista)
})

novoArtista = new Artista({
    nome:'gu',
    pais:'brazi'
})

novoArtista.save(function(err, artista){
    if(err) console.error(err)
    console.log(artista)
})

novoArtista = new Artista({
    nome:'igor',
    pais:'EUA'
})

novoArtista.save(function(err, artista){
    if(err) console.error(err)
    console.log(artista)
})

*/
/*
findArtista = Artista.find({nome: 'igor'} ,function(err, artista){
    if(!err){
        return artista;
    }else{
        console.log({error: 'Could not show user'})
    }
})
*/



