var express = require('express')
var app = express()
app.set('view engine', 'ejs')   //set ejs as view engine to put params to html
// npm install ejs   <h1> <%= name %> </h1>

app.get('/', function(req, res) {
  res.send('Home page')  
})

app.get('/about', function(req, res) {
    res.send('About page')  
})

app.get('/news', function(req, res) {
    res.send('News main page')  
})

//http://127.0.0.1:3000/news/Maks/23
// app.get('/news/:name/:age', function(req, res) {
//     res.send(`News about ${req.params.name} and he is ${req.params.age} year old.`)  
// })

app.get('/news/:name/:age', function(req, res) {
    
    var obj = {
        model:'audi',
        age: 2007,
        owners: ['Johansson', 'Svensson', 'Filipsson']
    }
    
    res.render('news', {
        newsName: req.params.name,
        newsAge: req.params.age,
        obj: obj
    })  
})


app.listen(3000)

/*
var express = require('express');
var app = express();
app.use(express.static("."));
*/