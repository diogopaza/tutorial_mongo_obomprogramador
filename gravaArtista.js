mongoose = require('mongoose')
url = require('url');
http = require('http')
Estilo = require('./modelEstilo');
Artista = require('./modelArtista');



mongoose.connect('mongodb://localhost/bancoEstilo', function(err){
    if(err)
        console.log('Erro ao conectar')
    console.log('conectou')

})


const server = http.createServer( async (req, res) => {
  
    if(req.url == '/')
        res.end("OK 8000")
   if(req.url == '/artistas'){
    Artista.find({nome: "jj2000" }, function(err, artista){
        if(!err && artista != null){
            resposta = JSON.stringify(artista)
            res.write( resposta );
            res.end();
        }
        if(err)
           res.end("Erro interno") 
        if(artista == null)
            res.end("Artista não encontrado") 
        
       
        
    })

   }


   if(req.url == '/estilos'){
    Estilo.find({ }, function(err, artista){
        if(!err && artista != null){
            
            resposta = JSON.stringify(artista)
            res.write( resposta );
            res.end();
        }
        if(err)
           res.end("Erro interno") 
        if(artista == null)
            res.end("Artista não encontrado") 
        
       
        
    })

   }

   if(req.url == '/populate'){
    Artista.findOne({ nome: 'jj2000' }).populate( 'estilo_id').exec( function(err, artista){
        if(!err && artista != null){
            resposta = JSON.stringify(artista)
            res.write( resposta );
            res.end();
        }
        if(err)
           res.end("Erro interno") 
        if(artista == null)
            res.end("Artista não encontrado") 
        
       
        
    })

   }

   if(req.url == '/atualizaestilo'){
   
    //url = url.parse(req.url, true);
    
    //res.write(JSON.stringify(url));
    //res.end();

     estiloProcurado = await Estilo.findOne( { _id: "5a72245f6c9c301180faf495" })
     console.log(JSON.stringify(estiloProcurado._id))
     
     await Estilo.findByIdAndUpdate( estiloProcurado._id, {
         '$set':{
             pais:'Brazil'
         }
     })

     res.end('Estilo Atualizado com sucesso')

    }

    if(req.url == '/atualizausuario'){
        
         //url = url.parse(req.url, true);
         
         //res.write(JSON.stringify(url));
         //res.end();
     
          artistaProcurado = await Artista.findOne( { nome: "jj2000" })
          console.log(JSON.stringify(artistaProcurado))
          
          if(artistaProcurado == null)
            res.end('Artista não localizado')
          await Artista.findByIdAndUpdate( artistaProcurado._id, {
              '$set':{
                  estilo_id:"5a72fc86900c9825b8b722a4"
                  
              }
          })
          
          res.end("Artista atualizado")
     
         
     
         }


    






    

    /*
    Estilo.findOne( { _id: "5a72245f6c9c301180faf495" }, function(err, estilo) {


 
    if(!err){
        
        estiloProcurado = JSON.stringify(estilo);
        res.end( estiloProcurado )
        
    }

    if(err){
        res.end("erro")
    }
})  

    
    Estilo.findByIdAndUpdate(  estilo.id  ,{
        //if(!err && estiloAtualizado != null){
            '$set' : {
                pais : 'Brazil',
            }
        })
            
 */      
 


  


}).listen('8000', () => {
    console.log('estou ouvindo na 8000');
})




//atualiza Artista





/*
Artista.findByIdAndUpdate({nome: artista }, function(err, artista){
    if(!err && artista != null){
        resposta = JSON.stringify(artista)
        res.write("<h3>" + resposta + "</h3>");
        res.end();
    }
    if(err)
       res.end("Erro interno") 
    if(artista == null)
        res.end("Artista não encontrado") 
    
   
    
})
*/