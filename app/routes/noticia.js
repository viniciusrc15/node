module.exports = function(application){
	
	application.get('/noticia', function(req, res){
		
		var connection = application.config.dbConnection();
		var noticiaModel = new application.app.models.noticiasModel(connection);

		noticiaModel.getNoticia(function(err, result){
			res.render("noticias/noticia",{noticia: result});
		});
		//res.render("noticias/noticias");
	});
};