var express = require('express')
var app = express()
app.set('view engine', 'ejs')   
var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: false }))
var urlencodedParser = bodyParser.urlencoded({ extended: false })

"use strict";
const nodemailer = require("nodemailer");



app.get('/', function(req, res) {
    console.log(req.query)
    res.render('home')  
})

app.get('/about', function(req, res) {
    var data = {
        author:'M.G.',
        created: 2021,
    }
    res.render('about', {data})  
})

app.get('/form-example', urlencodedParser, function(req, res) {
    res.render('form-example')  
})

app.post('/form-example', urlencodedParser, function(req, res) {
    if(!req.body) return res.sendStatus(400)
    console.log(req.body)



    //////////////////////////////////////////////
    async function main() {
    let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "maxsverige@hotmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
main()
    //////////////////////////////////////////////









    res.render('form-example-success', {data: req.body})  
})

app.get('/contact', function(req, res) {
    var adress = 'Stockholm'
    var phone = 08283672
    var mail = 'fake@mail.com'
    res.render('contact', {
        adressValue: adress,
        phoneValue: phone,
        mailValue: mail
    })  
})

app.get('/news/:name/:age*?', function(req, res) {
    
    var data = {
        model:'audi',
        age: 2007,
        owners: ['Johansson', 'Svensson', 'Filipsson']
    }

    res.render('news', {
        data: data,
        params: req.params
    })  
})


app.listen(3000)

/*
var express = require('express');
var app = express();
app.use(express.static("."));
*/
console.log('listening on port 3000')