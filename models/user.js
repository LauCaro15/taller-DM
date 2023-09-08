const mongoose = require('mongoose')
const address = require('./address.js')
const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    active: { type: Boolean, require: true, default: true },
    avatar: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    current_password: { type: String, require: true },
    address: { type: mongoose.Schema.Types.ObjectId, ref:"Address"}
})

module.exports = mongoose.model("User", userSchema);