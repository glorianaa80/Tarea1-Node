const http = require('http');

http.createServer(f).listen(5000);

let JsonCars = require('./cars.json')


function f(req, res) {
  console.log(req.url);
  if (req.url === '/api/v1/cars') {
    if (req.method === 'GET') {
      res.end(JSON.stringify({
        success:true,
        error:null,
        data:JsonCars 
      }));
    }
  } else  res.end(JSON.stringify({
        success:false,
        error:'error',
        data:null 
  }))
}