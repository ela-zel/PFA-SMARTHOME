const mongoose = require('mongoose');
const Schema = mongoose.Schema

const accountSchema = new Schema({
    email: {
        unique:true,
        type:String
    },
    password: String,
    lname: String,
    fname: String,
    phone: String,
})
const accountModel = mongoose.model('account', accountSchema );

module.exports = accountModel;