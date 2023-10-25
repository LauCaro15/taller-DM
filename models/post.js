const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    avatar: [{ type: String }],  // Almacena múltiples rutas de imágenes en un arreglo
    active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Post", postSchema);
