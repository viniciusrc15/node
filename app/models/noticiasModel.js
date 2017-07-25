function Noticias(connection){
	this._connection = connection;
}

Noticias.prototype.getNoticias = function (callbacks){
	this._connection.query('select * from noticias order by data_noticia desc', callbacks);
}

Noticias.prototype.getNoticia = function (callbacks){
	this._connection.query('select * from noticias where id_noticia = 1', callbacks);
}


Noticias.prototype.salvarNoticia = function (noticia, callbacks){
	this._connection.query('insert into noticias set ?', noticia, callbacks);
}

Noticias.prototype.ultimas5Noticias = function(callbacks){
	this._connection.query('select * from noticias order by data_noticia desc limit 5', callbacks);
}
module.exports = function () {
	return Noticias;
}