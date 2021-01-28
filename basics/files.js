const fs = require('fs');

fs.unlink('file.txt', function() {
    console.log('file.txt successfully removed')    
})

//fs.mkdirSync('new-directory')
//fs.rmdir