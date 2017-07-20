module.exports.form_inc_noticias = function(application, req, res){
	res.render("admin/form_add_noticia", {validar: {}, noticia: {}});
};

module.exports.noticia_salvar = function(application, req, res){
	var inf = req.body;

	req.assert('titulo','Título não pode ser vazio').notEmpty();
	req.assert('resumo','Resumo não pode ser vazio').notEmpty().len(10,100);
	req.assert('autor','Autor não pode ser vazio').notEmpty().
	req.assert('data_noticia','Data noticia incorreta').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia não pode ser vazio').notEmpty();

	var erro = req.validationErrors();
	if(erro){
		res.render("admin/form_add_noticia", {validar: erro, noticia: inf});
		return;
	}
	
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.noticiasModel(connection);

	noticiasModel.salvarNoticia(inf, function(err,result){
		res.redirect('/noticias');
	});
};