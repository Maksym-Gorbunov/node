//read file async, continue program during reading/writing file
var fs = require('fs')
var file_text = fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log(data)  
})

var file_text = fs.writeFile('text_async.txt', 'Some new text date here', function(err, data) {})

console.log('Test1') 
