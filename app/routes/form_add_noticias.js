module.exports = function(app){
	app.get('/form_inc_noticias',function(req, res){
		res.render("admin/form_add_noticia");
	});
};