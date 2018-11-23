var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var morgan = require('morgan');

var productRouter = require('./product');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/products', productRouter);

app.use(function (err, req, res, next) {
    if (err) {
        res.staus(500).send(err);
    }
});

module.exports = app;