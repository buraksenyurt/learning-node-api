var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var _ = require('lodash');
app.use(bodyParser.json());

var players = [];

app.get('/players', function (req, res) {
    //console.log(players);
    res.json(players);
});

app.get('/players/:name', function (req, res) {
    var player = _.find(players, { fullname: req.params.name });
    //console.log(player);
    if (player == null)
        res.sendStatus(404);
    else
        res.send(player);
});

app.post('/players', function (req, res) {
    var player = req.body;
    //console.log(player);
    players.push(player);
    res.send(player);
});

app.listen(7001, function () {
    console.log('listenin on localhost:7001');
});