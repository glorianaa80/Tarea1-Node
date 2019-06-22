const http = require('http');

 http.createServer(f).listen(5000);

 function f(req, res){
  if (req.method === 'GET') {
     res.end('Hola Mundo estoy vivo todavia funciono soy un GET');
  }
  if (req.method === 'POST') {
    res.end('Hola Mundo estoy vivo todavia funciono soy un POST');
 }
 }