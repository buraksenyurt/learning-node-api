var webToken = require('jsonwebtoken');
const config = require('./config');

var check = (req, res, next) => {
    if (req.headers['x-access-token'] === undefined && req.headers['authorization'] === undefined) {
        return res.json({
            success: false,
            message: 'Unsupported token'
        });
    } else {
        var token = req.headers['x-access-token'] || req.headers['authorization'];

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
            webToken.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Invalid token'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    }
};

module.exports = {
    check: check
}