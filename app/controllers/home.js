module.exports.index = function(application, req, res){
	connection = application.config.dbConnection();

	modelHome = new application.app.models.noticiasModel(connection);

	modelHome.ultimas5Noticias(function(erro, result){
		console.log(result);
		res.render("home/index",{noticias: result});
	});
	
};