//read file sync, stop all while reading
var fs = require('fs')
var file_text = fs.readFileSync('text.txt', 'utf8')
console.log(file_text)

var message = file_text+"\n" + "New file created!"
fs.writeFileSync('text2.txt', message)