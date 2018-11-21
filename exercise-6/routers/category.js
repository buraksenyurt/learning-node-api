var categoryRouter = require('express').Router();

var categories = [
    { "id": 1, "title": "Çiçek" },
    { "id": 2, "title": "Şarküteri" },
    { "id": 3, "title": "Sebze" }
];

categoryRouter.get('/', function (req, res) {
    res.json(categories);
})

//todo Write get(id), push, put and post implementation

module.exports = categoryRouter;