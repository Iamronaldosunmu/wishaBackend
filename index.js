const express = require('express');
const app = express();
const config = require('config');

require('express-async-errors');
process.on('unhandledRejection', (ex) => {
    throw ex;
  });
process.on('uncaughtException', (ex) => {
    throw ex;
  });
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/prod')(app);

const port = config.get('port') || 3000;



const server = app.listen(port, () => {console.log(`Now listening on port ${port}`)});