var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var _ = require('lodash');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var logger = require('./niceLogger');

var players = [
    {'nickname':'cordi kuroyft','level':85},
    {'nickname':'pol gaskoyin','level':75}
];

app.get('/players', function (req, res) {
    logger.info(`Current players count ${players.length}`);
    res.json(players);
});

app.get('/players/:name', function (req, res) {
    var player = _.find(players, { nickname: req.params.name });
    if (player == null)
    {
        logger.error('404 - Player did not find');
        res.sendStatus(404);        
    }
    else
    {
        logger.info(`one player founded '${player.nickname}'`);
        res.send(player);
    }
});

app.listen(7001, function () {
    logger.info(`Server is listening on port 7001`);
});