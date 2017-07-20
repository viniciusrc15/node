module.exports = function(application){
	application.get('/form_inc_noticias',function(req, res){
		application.app.controllers.admin.form_inc_noticias(application, req, res);
	});

	application.post('/noticia/salvar',function(req, res){
		application.app.controllers.admin.noticia_salvar(application, req, res);
	});
};