var app = require('./config/server');

/* EXPRESS
app.get('/', function(req, res){
	res.send("<html><body><h1>teste</h1></body></html>");
});
*/


//EJS
/*app.get('/tecnolog', function(req, res){
	res.render("secao/tecnologia")
});*/

/*
Saiu com implementação do consign
var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);
var rotaHome = require('./app/routes/home')(app);
var rotaForm = require('./app/routes/form_add_noticias')(app);
*/


app.listen(8080, function() {
	console.log('Aplicação express');
});