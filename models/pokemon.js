const mongoose = require('mongoose');
const pokemonSchema = mongoose.Schema({
    name: {type: String, required: true},
    url: {type: String, required: true},
    order: {type: Number, required: true},
    height: {type: Number, required: true},
});

module.exports = mongoose.model('Pokemon', pokemonSchema);