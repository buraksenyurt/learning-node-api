var sampleData = {
    "fullname": "burak selim şenyurt",
    "id": 1,
    "age": 43,
    "gender": "male"
}

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'), function (err) {
        res.status(500).send(err);
    })
});

app.get('/data', function (req, res) {
    res.json(sampleData);
});

app.listen(7001, function () {
    console.log('listenin on localhost:7001');
});