 //var http = require('http');
 //var client = http.createClient(8080, 'localhost');
//var host = '127.0.0.1';
//var port = '3000';
// var request = client.request('GET', '/headers');
 //var app = require('express')();

var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('Hello World!');
   res.end();
 }).listen(3000);
//app.listen(3000, function () {
//console.log('Example app listening on port 3000!')
//})

//app.get('/getData', function(req, res) {

    ///'concepts': {},
    //'keywords': {
    //	'emotion': true,
     // 'sentiment': true,
     // 'limit': 2
    //},

 //});

// request.end();

// request.on("response", function (response) {
//     console.log('Status:', response.statusCode);
//     console.log('Headers: ', response.headers);
//     response.pipe(process.stdout);
// });
