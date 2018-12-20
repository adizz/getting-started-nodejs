var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Bengaluru","Berlin","Chennai","New York","San Francisco","Tokyo","Vizag"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
