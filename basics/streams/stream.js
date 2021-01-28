var fs = require('fs')

var streamReader = fs.createReadStream(__dirname + '/article.txt', 'utf8')
var streamWriter = fs.createWriteStream(__dirname + '/article_copy.txt')

streamReader.on('data', function (chunk) {
    console.log('___________________________________________')
    // console.log(chunk)
    streamWriter.write(chunk)
})