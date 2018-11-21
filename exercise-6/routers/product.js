var productRouter = require('express').Router();

var products = [
    { "id": 1000, "title": "bir saksı kasımpatı", "listPrice": 10, "category": 1 },
    { "id": 1001, "title": "bir sepet yumurta", "listPrice": 5, "category": 2 },
    { "id": 1002, "title": "iki demet maydanoz", "listPrice": 0.45, "category": 3 },
    { "id": 1003, "title": "iki sap orkide", "listPrice": 155, "category": 1 },
    { "id": 100, "title": "Kalite beyaz peynir", "listPrice": 60, "category": 2 }
];

productRouter.get('/', function (req, res) {
    res.json(products);
})

//todo Write get(id),get(category),get(greaterThen) push, put and post implementation

module.exports = productRouter;