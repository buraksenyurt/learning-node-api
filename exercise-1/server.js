var sampleData = { count: 12, motta: 'I hate hello world' };

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname, '/index.html', function (err) {
        res.status(500).send(err);
    })
});

app.get('data', function (req, res) {
    res.json(sampleData);
});

app.listen(7001, function () {
    console.log('listenin on localhost:7001');
});