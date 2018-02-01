mongoose = require('mongoose');
estilo = require('./modelEstilo');



const ArtistaSchema = new mongoose.Schema(
    {
        nome: String,
        pais: String,
        musicas:[
            {
                "titulo" : String
            }
        ],
        estilo_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Estilo' }
    }
)

Artista = mongoose.model('artista', ArtistaSchema);


module.exports = Artista;







/*
novoArtista = new Artista(
    {
        nome:"jj2000",
        pais:"mongolia",
        musicas:[
            {
                titulo:'iam love'
            },
            {
                titulo:'i hurt you'
            }
        ],
        estilo_id: '5a72245f6c9c301180faf495',
    }
)

novoArtista.save(function(err, artista){
    if(err)
        console.log( {error:"Erro ao gravar artista"} )
    console.log(artista)
    
})
/*
novoArtista2 = new Artista(
    {
        nome:"ardoLeon",
        pais:"brazil",
        musicas:[
            {
                titulo:'pense em mim'
            },
            {
                titulo:'e o amor'
            }
        ]
    }
)

novoArtista2.save(function(err, artista){
    if(err)
        console.log( {error:"Erro ao gravar artista"} )
    console.log(artista)
    
})


novoArtista3 = new Artista(
    {
        nome:"Mamonas",
        pais:"zambia",
        musicas:[
            {
                titulo:'1111'
            },
            {
                titulo:'33333'
            }
        ]
    }
)

novoArtista3.save(function(err, artista){
    if(err)
        console.log( {error:"Erro ao gravar artista"} )
    console.log(artista)
    
})
*/
