var models = require('../models/models.js')
var notas = {nombre:'Juan Perez', notaFinal: '100'}

exports.principal = function(req, res, next) {
  model.Contacto.findAll().then(function(notas){
    res.render('index', { title:'Examen final', subtitle:'Avances en computacion', notas:notas});
  })
}

exports.registroNota = function(req, res) {
  res.render('registroNota', {notas:notas});
}

exports.guardarNota = function(req, res){
  console.log("ingresa a guardar");
  notas = models.notas.build(req.body.notas);
  notas.save({fields:["nombre", "notaFinal"]}).then(function(){
    console.log("ingresa a redirect");
    res.render('notaRegistrada', {mensaje: 'Nota Registrada'});
  })
}
