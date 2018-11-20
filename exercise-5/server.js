var express = require('express')
var app = express()

var bodySizeController = function (req, res, next) {
    if (req.method == "POST") {
        var body = req.body
        console.log(body)
        var bodySize = (JSON.stringify(body)).length
        console.log('Body size is ' + bodySize)
        if (bodySize > 30) {
            res.status(400).send('JSON size is too big for me :(')
        }
        else {
            next()
        }
    }
    else {
        next()
    }
}

app.use(express.json())
var headerController = require('./headerController.js')
app.use(headerController({ type: 'application/json' }))
app.use(bodySizeController)

app.get('/', function (req, res) {
    res.send('Hello world :P')
})
app.post('/add', function (req, res) {
    res.send('Your message was received at ' + Date.now())
})

app.listen(5001)
console.log("http://localhost:5001 is online")