var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var tasks = [];

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'), function (err) {
        res.status(500).send(err);
    })
});

app.get('/tasks', function (req, res) {
    res.json(tasks);
    res.end();
});

app.post('/tasks', function (req, res) {
    console.log(req.body);
    tasks.push(req.body);
    //todo: add create logic
    res.end();
});

//todo: add update and delete logic

app.listen(5001);
console.log('server is online on port 5001');