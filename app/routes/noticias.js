//var dbConnection = require ("../../config/dbConnection");  Saiu com consign no BD

module.exports = function(application){
	
	application.get('/noticias', function(req, res){
		
		var connection = application.config.dbConnection();
		var noticiasModel = new application.app.models.noticiasModel(connection);

		noticiasModel.getNoticias(function(err, result){
			res.render("noticias/noticias",{noticias: result});
		});
		//res.render("noticias/noticias");
	});
};