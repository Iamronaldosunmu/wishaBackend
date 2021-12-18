const express = require('express');
const app = express();
const emails = require('./routes/emails');

app.use(express.json());
app.use('/api/emails', emails);

const port = process.env.PORT || 3000;



app.listen(port, () => {console.log(`Now listening on port ${port}`)});