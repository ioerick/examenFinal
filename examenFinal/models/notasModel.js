module.exports = function(sequelize, DataTypes){
  return sequelize.define('notas', {nombre: DataTypes.STRING, notaFinal: DataTypes.STRING});
}
