const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true },
    active: { type: Boolean, require: true, default: true },
    rol: { type: String, require: true },
})

module.exports = mongoose.model("User", userSchema);