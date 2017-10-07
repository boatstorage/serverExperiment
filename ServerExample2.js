var http = require('http');




var server_a = http.createServer(function(request,response) {
	response.writeHead(200, { "Content-Type": "text/html"});
	response.end("<h1>hello</h1>");

});


 	var a = server_a.listen(7000, function(){
		console.log("you are the best at coding");
	});




var server_b = http.createServer(function(request,response) {
	response.writeHead(200, { "Content-Type": "text/html"});
	response.end("<h1>hello</h1>");

});


    var b = server_b.listen(7500, function(){
		console.log("you are not good at baking");
	});


