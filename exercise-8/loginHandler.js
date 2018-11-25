var webToken = require('jsonwebtoken');
var config = require('./config');

var login = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    // take this username and password from another locations something like that DB

    if (username && password) {
        if (username === 'scoth' && password === 'tiger') {
            var token = webToken.sign({ username: username },
                config.secret,
                {
                    expiresIn: '10m'
                }
            );
            res.json({
                success: true,
                message: 'Authenticated :)',
                token: token
            });
        } else {
            res.send(403);
        }
    } else {
        res.send(400);
    }
};

module.exports = {
    login: login
}