
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');


var server = http.createServer(function (req, res) {
    if(req.method == 'GET'){

        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("index.html","UTF-8").pipe(res);

    }
    else if (req.method== 'POST'){

        var info = "";
        req.on('data',function(information){
            info += information;
        });
        req.on('end',function(){
            var data = ((querystring.parse(info)));



            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(data));

        });

    }
});


server.listen(8888);
console.log("server listening on 8888");
