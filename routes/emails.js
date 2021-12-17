const express = require('express');
const router = express.Router();

const listOfEmails = [];

//Request to return all the emails in the db
router.get('/', (req, res) => {
    res.send(listOfEmails);
})

//Request to get a particular email by it's id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const email = listOfEmails.find(mail => mail._id === id );
    if (!email) return res.status(404).send("There is no email with that id in our DB with that id")
    res.status(200).send(email);
})

module.exports = router;