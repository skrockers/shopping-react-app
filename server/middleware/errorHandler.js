const {appLogger} = require('./appLogger');

const errorHandler = (err, req, res, next) => {
    const errorMessage = `${err.name}: ${err.message}`
    appLogger('errorLogs.txt',errorMessage);
    res.status(500).send(err.message);
}

module.exports = errorHandler;