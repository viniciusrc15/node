var http = require('http');

var server = http.createServer(function(req, res) {
	var categoria = req.url;
	if(categoria == '/tecnologia'){
	 	res.end("<html><body><h1>tecnologia</h1></body></html>");
	}
	res.end("<html><body><h1>teste</h1></body></html>");
});

server.listen(3000);
