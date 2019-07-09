var http = require('http');

http.createServer(function(req,res){
   var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
   switch(path){
      case '':
         res.writeHead(200, { 'Content-Type' : 'text/plain' });
         res.end('homepage');
         break;
      
      case '/about':
	 res.writeHead(200, { 'Content-Type' : 'text/plain' });
         res.end('about');
         break;

      default:
	 res.writeHead(200, { 'Content-Type' : 'text/plain' });
         res.end('not found');
         break;

   }
}).listen(3000); 

console.log('server listening on port 3000. press ctrl+c to terminate.');

