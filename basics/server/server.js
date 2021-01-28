var http = require('http')

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    res.end('Plain text returned from server')
})

console.log('listener on port: 3000')
// server.listen(3000, 'localhost')
server.listen(3000, '127.0.0.1')