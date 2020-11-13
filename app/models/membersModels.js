const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create product Schema
const MemberSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    firstname: {
        type: String,
        required: [true, "First name field is required"]
    },
    mail: {
        type: String,
        required: [true, "email field is required"]
    },
    password: {
        type: String,
        required: [true, "password field is required"]
    }
});

const memberModels = mongoose.model('members', MemberSchema);

module.exports = memberModels;