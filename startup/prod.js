const helmet = require('helmet');
const compression = require('compression');

module.exports = function() {
    app.use(helmet());
    app.use(compression());
}