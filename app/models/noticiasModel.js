function Noticias(connection){
	this._connection = connection;
}

Noticias.prototype.getNoticias = function (callbacks){
	this._connection.query('select * from noticias', callbacks);
}

Noticias.prototype.getNoticia = function (callbacks){
	this._connection.query('select * from noticias where id_noticia = 1', callbacks);
}


Noticias.prototype.salvarNoticia = function (noticia, callbacks){
	this._connection.query('insert into noticias set ?', noticia, callbacks);
}


module.exports = function () {
	return Noticias;
}