module.exports = function(app){
	
	app.get('/noticias', function(req, res){
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '1234',
			database: 'cadastro'
		});

		connection.query('select * from curso', function(err, result){
			console.log(err);
			res.send(result);
		});
		//res.render("noticias/noticias");
	});
};