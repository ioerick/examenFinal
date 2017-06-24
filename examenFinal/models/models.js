var path = require("path");
var Sequelize = require("sequelize");
var sequelize = new Sequelize (null, null, {dialect:"sqlite", storage:"notasDB.sqlite"});
var notas = sequelize.import (path.join(__dirname,'notasModel'));
exports.notas = notas;

sequelize.sync().success(function(){
  notas.count().success(function(count){
    if (count === 0) {
      notas.create({
        nombre:"ejemplo nombre", notaFinal:"ejemplo notaFinal"
      }).success(function(){
        console.log("notas inicializada");
      })
    }
  })
})
