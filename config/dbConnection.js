var mysql = require('mysql');

var conMySql = function () {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'noticia'
	});
}

module.exports = function (){
	return conMySql;	
}