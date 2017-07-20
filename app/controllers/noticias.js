module.exports.noticiasController = function(application, req, res){
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.noticiasModel(connection);

	noticiasModel.getNoticias(function(err, result){
		res.render("noticias/noticias",{noticias: result});
	});
};

module.exports.noticiaController = function(application, req, res){
	var connection = application.config.dbConnection();
	var noticiaModel = new application.app.models.noticiasModel(connection);

	noticiaModel.getNoticia(function(err, result){
		res.render("noticias/noticia",{noticia: result});
	});
};