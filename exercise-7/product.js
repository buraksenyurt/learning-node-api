var _ = require('lodash');
var productRouter = require('express').Router();

var products = [];
var currentId = 0;

productRouter.get('/', function (req, res) {
    res.json(products);
});

productRouter.get('/:id', function (req, res) {
    var incomig = req.product;
    res.json(incomig || {});
});

productRouter.post('/', function (req, res) {
    var incomig = req.body;
    if (!incomig.id) {
        currentId++;
        incomig.id = currentId;
    }
    products.push(incomig);
    res.json(incomig);

    console.log('\n', products, '\n');
});

productRouter.delete('/:id', function (req, res) {
    var incomig = _.findIndex(products, { id: req.params.id });
    products.splice(incomig, 1);
    res.json(req.product);
});

productRouter.put('/:id', function (req, res) {
    var incoming = req.body;
    var product = _.findIndex(products, { id: req.params.id });
    console.log('founded ',product);
    if (products[product]) {
        var updated = _.assign(products[product], incoming);
        res.json(updated);
    }
    else {
        res.send();
    }
});

module.exports = productRouter;