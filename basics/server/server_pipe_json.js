var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
    
    var obj = {
        model: 'Volvo',
        color: 'silver',
        year: 2009
    }

    response.end(JSON.stringify(obj))
})

console.log('listener on port: 3000')
server.listen(3000, '127.0.0.1')