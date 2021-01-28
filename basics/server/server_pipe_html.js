var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    
    var streamReader = fs.createReadStream(__dirname + '/index_1.html', 'utf8')
    streamReader.pipe(response)
})

console.log('listener on port: 3000')
server.listen(3000, '127.0.0.1')