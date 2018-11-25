var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var tokenManager = require('./tokenManager');
var handler = require('./loginHandler');

var app = express();
var port = process.env.PORT || 5556;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.post('/login', handler.login);
app.get('/', tokenManager.check, function (req, res) {
    res.json({
        tipoftheday: 1,
        tip: 'for logging you can use [morgan] module'
    });
});
app.listen(port, () => {
    console.log(`server is online at port ${port}`);
});