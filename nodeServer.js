var express = require('express');

var server = express();
server.use(express.static(__dirname));

var port = 8000;
server.listen(port, function() {
	console.log('server listening on port' + port);
});