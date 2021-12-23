const express = require('express');
const router = express.Router();
const Joi = require('joi');
const boolean = require('joi/lib/types/boolean');
const Email = require('../models/emails');

const schema = {
    email: Joi.string().required().min(3).email()
}

//Request to return all the emails in the db
router.get('/', async (req, res) => {
    const emails = await Email.find({});
    const listOfEmails = [];
    emails.forEach(mailObject => listOfEmails.push(mailObject.email));
    res.send(listOfEmails);
});

//Create an email that will be stored in the DB
router.post('/', async (req, res) => {
    const {error} = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    const mail = await Email.find({email: req.body.email});
    if (mail.length !== 0) return res.status(400).send("Email already exists");

    const dbemail = new Email({email: req.body.email});
    const result = await dbemail.save();
    res.status(200).send(result);


    
})

module.exports = router;