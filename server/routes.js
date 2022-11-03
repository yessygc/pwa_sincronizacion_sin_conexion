// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [

  {
  _id: 'XXX',
  user: 'spiderman',
  mensaje: 'Hola spiderman' 
  },
  {
    _id: 'XXX',
    user: 'hulk',
    mensaje: 'Hola hulk' 
  },
  {
    _id: 'XXX',
    user: 'thor',
    mensaje: 'Hola thor' 
  },
  {
    _id: 'XXX',
    user: 'ironman',
    mensaje: 'Hola ironman' 
  },

];




// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});




module.exports = router;