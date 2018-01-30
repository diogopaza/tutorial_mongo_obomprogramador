Usuario = require('./servidor')


Usuario.findOne({cpf: 5555},function(err, usuario){
    if(!err){
        console.log(usuario)
    }else{
        consoel.log({error: 'Não foi possível abrir o usuário'})
    }
})