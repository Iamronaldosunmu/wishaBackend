const express = require('express');
const app = express();
const emails = require('./routes/emails');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const winston = require('winston');
require('express-async-errors');
mongoose.connect('mongodb://localhost/Wisha').then(() => console.log('Connected to the database')).catch(err => console.log(err.message));

app.use(cors())
app.use(express.json());
app.use('/api/emails', emails);

const port = config.get('port') || 3000;



app.listen(port, () => {console.log(`Now listening on port ${port}`)});