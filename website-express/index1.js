var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Home page')  
})

app.get('/about', function(req, res) {
    res.send('About page')  
})

app.get('/news', function(req, res) {
    res.send('News main page')  // or sendFile(__dirname + 'about.html')
})

app.get('/news/:id', function(req, res) {
    res.send('News page, article with id ' + req.params.id)  
})

app.listen(3000)