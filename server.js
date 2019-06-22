const http = require('http');

http.createServer(f).listen(5000);

let JsonCars = require('./cars.json');
let JsonBrands = require('./brands.json')


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
  }
  
  if (req.url === '/api/v1/brands') {
    if (req.method === 'GET') {
      res.end(JSON.stringify({
        success:true,
        error:null,
        data:JsonBrands 
      }));
    }
  } 

  if (req.url === '/api/v1/cars/report') {
    let h = Object.keys(JsonCars[0]).join(',')+ "\n";
    let body = '';
    JsonCars.forEach(o => {
      body += Object.keys(0).map(k => o[k]).join(',')+ "\n"
    }); 
    h += body;
    res.end(h);
  }

  else  res.end(JSON.stringify({
        success:false,
        error:'error',
        data:null 
  }));
}