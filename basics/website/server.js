var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
    if(req.url === '/' || req.url === '/index') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(__dirname + '/pages/index.html', 'utf8').pipe(res)
    }
    else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(__dirname + '/pages/about.html', 'utf8').pipe(res)
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(__dirname + '/pages/404.html', 'utf8').pipe(res)
    } 
})

console.log('listener on port: 3000')
server.listen(3000, '127.0.0.1')