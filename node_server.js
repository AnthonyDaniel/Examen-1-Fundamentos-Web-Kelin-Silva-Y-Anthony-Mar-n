var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("./index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    
    }else if (req.url.match("\.js$")) {
        var cssPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/js" });
        fileStream.pipe(res);

    } else if (req.url.match("\.woff2$")) {
        var cssPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "woff2" });
        fileStream.pipe(res);

    } else if (req.url.match("\.woff$")) {
        var cssPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "woff" });
        fileStream.pipe(res);

    } else if (req.url.match("\.ttf$")) {
        var cssPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "tff" });
        fileStream.pipe(res);

    } else if (req.url === "/index.html"){
        fs.readFile("./index.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }
    else if (req.url === "/generic.html") {
        fs.readFile("./generic.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

}).listen(3000);