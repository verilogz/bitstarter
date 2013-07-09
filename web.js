var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var buffer = new Buffer(30);
var fs = require('fs');
var data = fs.readFileSync('./index.html',"utf8");
buffer.write(data, "utf-8");  
console.log(buffer);
response.send(buffer);
 
});

var port = process.env.PORT || 5000;
console.log("start");
app.listen(port, function() {
  console.log("Listening on " + port);
});
