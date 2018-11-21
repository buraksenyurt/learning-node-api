var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');

var productRouter = require('./routers/product');
var categoryRouter = require('./routers/category');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/products', productRouter);
app.use('/categories', categoryRouter);

app.use(function (err, req, res, next) {
    if (err) {
        console.log(err.message);
        res.stats(500).send(err);
    }
});

app.listen(7002);
console.log('listening on http://localhost:7002');