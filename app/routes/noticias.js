//var dbConnection = require ("../../config/dbConnection");  Saiu com consign no BD

module.exports = function(application){
	
	application.get('/noticias', function(req, res){
		
		application.app.controllers.noticias.noticiasController(application, req, res);
		//res.render("noticias/noticias");
	});

	application.get('/noticia', function(req, res){
		
		application.app.controllers.noticias.noticiaController(application, req, res);
		//res.render("noticias/noticias");
	});
};