const http = require('http')
const Artista = require('./findArtista')
const url = require('url')

const server = http.createServer( (req, res) => {
    var reqUrl = url.parse(req.url, true);
   
    const { artista } = reqUrl.query;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body>");
    //res.write( artista )
   // res.end();
    if(artista != null){
       
       // res.write( artista )

        Artista.findOne({nome: artista }, function(err, artista){
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
         
    }  
        /*
        Artista.findOne( { nome : 'beto' }, function(err, localArtista){
            if(err)
                console.error(err)
            resposta = JSON.stringify(localArtista)
            res.write("<h2>" + resposta + "</h2>" );
            
        })




        res.end();
    

    }
  
   
    /*
    artista.findOne({ artista }, function(err, artista){
        if(!err)
            
        resposta = JSON.stringify(artista)
        res.write(resposta );
        
    })

   /*
    for(var pos in reqUrl.query){
        res.write( "<h3>" + reqUrl.query[pos] + "</h3>" )
    }
   */
    if(req.url === '/'){
       
        
       
        /*
        for(var pos in reqUrl.query){
           res.write( reqUrl.query[pos] )
       }
       */
        res.write("<h1>Ok na 8000</h1>");
        res.end();
    }
    if(req.url === '/artista'){
       Artista.findOne({nome:'igor'}, function(err, artista){
            if(!err)
                
            resposta = JSON.stringify(artista)
            res.write("<h3>" + resposta + "</h3>");
            res.end();
            
        })
    }
  
    //res.write("</body></html>");
   // res.end();
    

}).listen('8000', () => {
    console.log('estou ouvindo na 8000');
})

/*
http.get('/', function(req, res){
    if(!err){
        res.send("<h1>Estou navegando no /artista</h1>")
    }else{
        res.send('<h1>Problemas ao abrir o artista</h1>')
        res.end();
    }

})
*/