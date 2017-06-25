module.exports= function(sequelize, DataTypes){
	 return sequelize.define('Notas', {nombre: DataTypes.STRING,
		 notaFinal: DataTypes.STRING								                                       	              }
                             );
}
