const express = require('express');
const router = express.Router();
const Joi = require('joi');

const listOfEmails = [
    {_id: 1, email: 'ronaldosunmu@gmail.com'}, 
    {_id: 2, email: 'richardosunmu@gmail.com'}, 
    {_id: 3, email: 'ronaldosunmu.genztechies@gmail.com'}
];

const schema = {
    email: Joi.string().required().min(3).email()
}

//Request to return all the emails in the db
router.get('/', (req, res) => {
    res.send(listOfEmails);
});

//Request to get a particular email by it's id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const email = listOfEmails.find(mail => mail._id === id );
    if (!email) return res.status(404).send("There is no email with that id in our DB with that id")
    res.status(200).send(email);
});

//Create an email that will be stored in the DB
router.post('/', (req, res) => {
    // First check if there is an email like that in the db
    // If there is, return a message with a status code 400 saying email already exists
    // use joi to validate the email address
    const email = req.body.email;
    if (listOfEmails.find(mail => mail.email == email)) return res.status(400).send("Email already exists in the DB");

    const {error} = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    const _id =  listOfEmails[listOfEmails.length - 1]._id + 1;
    const response = {_id, email};
    listOfEmails.push(response);

    res.status(200).send(response);


    
})

module.exports = router;