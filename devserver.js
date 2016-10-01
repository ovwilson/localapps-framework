
// Node.js Web Server - written by Orlando Wilson

var http = require('http'),fs = require('fs'), config, host, port, server;

console.log('Starting server....');
console.log('Reading config file....');

config = JSON.parse(fs.readFileSync('config.json'));

console.log('Synced config file');

host = config.devserver.host;
port = config.devserver.port;

server = http.createServer( function(request,response){
	
	console.log('Received request url: ' + request.url);

	fs.readFile('.'+request.url, function(error, data){
		
		console.log('Starting read file function....');
		
		if (error) {
			response.writeHead(404, {'Content-Type':"text-plain"});
			response.end('Error 404: This page was not found.');
			console.log('Error 404: This page was not found.');
		}		
		else {
			response.writeHead(200, {'Content-Type':'text-html'});
			response.end(data);
		}
	});	
});
server.listen(port,host,function(){
	console.log('Server Listening on '+host+':'+port);
});

fs.watchFile("config.json",function(){
	config = JSON.parse(fs.readFileSync('config.json'));
	host = config.workserver.host;
	port = config.workserver.port;
	server.close();
	server.listen(port,host,function(){
		console.log('Server now Listening on '+host+':'+port);
	});	

});