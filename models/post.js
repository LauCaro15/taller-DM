const mongoose = require('mongoose')


const postShema = mongoose.Schema({
    title: { type: String, require: true },
    subtitle: { type: String, require: true },
    active: { type: Boolean, default: true },
    avatar: { type: String, require: true },
    description: { type: String, require: true },
})

module.exports = mongoose.model("Post", postShema);

// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema({
//     name: { type: String },
//     lastname: { type: String },
//     email: { type: String },
//     password: { type: String },
//     active: { type: Boolean },
//     rol: { type: String },
//     // address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" }
// });

// module.exports = mongoose.model("User", userSchema);