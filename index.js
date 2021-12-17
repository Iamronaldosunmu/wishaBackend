const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('It is finally working');
})
app.get('/:id/age?sortBy=named', function (req, res) {
    res.send(req.params.query);
})

app.listen(port, () => {console.log(`Now listening on port ${port}`)});