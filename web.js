var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var bufer = new Buffer(30);
var fs = require('fs');
fs.readFileSync('./index.html', function(err,data)
{
if(err)throw err;
buffer.write(data, "utf-8");  
console.log(buffer);
response.send("Hello batates!");
});
  
});

var port = process.env.PORT || 5000;
console.log("start");
app.listen(port, function() {
  console.log("Listening on " + port);
});
