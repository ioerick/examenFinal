module.exports = function(sequelize, DataTypes){
	                      return sequelize.define('Reclamo', {tipoReclamo: DataTypes.STRING,
				                 observacion: DataTypes.STRING,
				                   fecha: DataTypes.STRING									                                       	              }
                                                                                       );
}
