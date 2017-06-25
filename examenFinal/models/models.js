//obtenemos ruta en la que nos encontramos
var path = require("path");

//Se crea el modelo
var Sequelize = require("sequelize");

//Declaramos que haremos uso de sqlite
var sequelize= new Sequelize (null, null, null, {dialect:"sqlite", storage: "notaBD.sqlite"});

//importamos la definicion de la tabla que se encuentra en reclamoModel.js
var nota =sequelize.import (path.join(__dirname,'notaModel'));
exports.nota = nota; //se exporta la definicion

//sequelize.sync() crea e inicializa la tabla.
sequelize.sync().success (function(){
	//success ejecuta un manager una vez creada la tabla
   nota.count().success(function(count){
   	  //preguntamos si la tabla esta vacia
   	  if(count===0){
   	  	nota.create({
   	  		nombre: "Juan Perez",
			   notaFinal: "100"
				}).success(function(){
   	  			console.log("Notas inicializado")
   	  		})
   	  }
   })
})
