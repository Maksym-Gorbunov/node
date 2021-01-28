var fs = require('fs')

var streamReader = fs.createReadStream(__dirname + '/article.txt', 'utf8')
var streamWriter = fs.createWriteStream(__dirname + '/article_backup.txt')

streamReader.pipe(streamWriter)