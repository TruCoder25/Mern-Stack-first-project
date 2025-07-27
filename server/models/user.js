
const mongoose = require('mongoose');

const UserSchema = new mangoose.Schema({
    name : String,
    email : String,
    password : String,
})

const User = mangoose.User || mangoose.model('User', UserSchema);

module.exports = User;