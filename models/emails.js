const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 255
    }
})

const Email = mongoose.model('email', emailSchema);

module.exports = Email;
