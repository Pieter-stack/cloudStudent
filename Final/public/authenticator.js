module.exports = function (request, response, next) {
    var passcode = 'express-rules';

    if (request.query.passcode === passcode) {
        next();
    } else {
        response.send(401);
    }
}