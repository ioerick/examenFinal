var models = require('../models/models.js');


exports.principal = function(req, res, next) {
                 models.nota.findAll().then( function(notas){
                       res.render('index',{ title:'Proyecto Final',
                         subtitle: 'Avances en computacion',
                          notas: notas
                             });
                              });
					 }
exports.registroNota = function(req, res) {
  var nota = {nombre:'juan perez', notaFinal:'100'}
 		              res.render('registroNota', {nota:nota});

		   };
exports.guardarNota = function(req, res) {

	console.log("ingresa a guardar");
	nota = models.nota.build (req.body.nota);
    //a continuacion guardamos los campos que recibimos del formulario
    nota.save	({fields:["nombre",
    					      "notaFinal"
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirect");
    			 	res.render('respuestaNota', {mensaje:'Se registro la nota con exito'});
    			 });
console.log(nota);
                                              };
