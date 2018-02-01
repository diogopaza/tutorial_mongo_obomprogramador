mongoose = require('mongoose')
/*
mongoose.connect('mongodb://localhost/bancoEstilo', function(err){
    if(err)
        console.log('Erro ao conectar')
    console.log('conectou')

})
*/
schemaEstilo = new mongoose.Schema(
    {
        nome:String,
        pais: String,
    }
)

Estilo = mongoose.model('Estilo',schemaEstilo);
/*
novoEstilo = new Estilo(
    {
        nome:'Pagode'
    }
);

novoEstilo.save(function(err, estilo){
    if(err)
        consoel.log(err)
    console.log(estilo)
})

novoEstilo2 = new Estilo(
    {
        nome:'Samba'
    }
);

novoEstilo2.save(function(err, estilo){
    if(err)
        consoel.log(err)
    console.log(estilo)
})

novoEstilo3 = new Estilo(
    {
        nome:'Rock'
    }
);

novoEstilo3.save(function(err, estilo){
    if(err)
        consoel.log(err)
    console.log(estilo)
})
*/
module.exports = Estilo;