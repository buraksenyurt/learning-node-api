module.exports = function (parameters) {
    return function (req, res, next) {
        console.log('parameters.type ' + parameters.type)
        var contentType = req.headers['content-type']
        console.log('Incoming content-type ' + contentType)
        if (contentType !== parameters.type) {
            res.status(400).send('Server can only be run with JSON content-type')
        }
        else {
            next()
        }
    }
}