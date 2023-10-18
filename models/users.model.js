const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    class: Number,
    marks: Number
}, {
    versionKey: false
})

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;