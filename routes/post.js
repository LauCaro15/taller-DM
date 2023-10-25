const express = require('express');
const router = express.Router();
const multer = require('multer');
const postController = require('../controllers/post');

// Para manejo de imágenes
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: "uploads/posts",
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
}).array('avatar', 10); // Usa 'array' si esperas múltiples imágenes

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPost);
router.post("/new-post", upload, postController.createPost);
router.delete("/:id", postController.removePost);

module.exports = router;
