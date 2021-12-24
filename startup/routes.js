const express = require('express');
const emails = require('../routes/emails');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/emails', emails);
    app.use(error);
}