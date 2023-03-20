require('dotenv').config();
const express = require('express')
const hbs =require('hbs');
const app = express()
const port = process.env.port;
//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parcial');
//Servir contenido estaticos
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home',{
    nombre:'Marco Valencia',
    titulo: 'Curso node',
  })
})
app.get('/elements',  (req, res) => {
  res.render('elements',{
    nombre:'Marco Valencia',
    titulo: 'Curso node',
  })
})
app.get('/generic',  (req, res) => {
  res.render('generic',{
    nombre:'Marco Valencia',
    titulo: 'Curso node',
  })
})
//app.get('/elements', (req, res) => {
  //res.sendFile(__dirname + '/public/elements.html')
  //})

  //app.get('/generic', (req, res) => {
  //  res.sendFile(__dirname + '/public/generic.html')
  //  })
//app.get('*', (req, res) => {
//    res.sendFile(__dirname + '/public/404.html')
//  })
app.listen(port, ()=>{
  
})