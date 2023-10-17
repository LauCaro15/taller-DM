const express = require('express');
const router = express.Router();
const multer = require('multer');
const postController = require('../controllers/post');

// http://localhost:3000/api/v1/posts

//Para manejo de imagenes

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
}).single('avatar');



router.get("/" , postController.getAllPosts );
router.get("/:id", postController.getPost);
router.post("/new-post", upload, postController.createPost );
router.delete("/:id", postController.removePost);




// router.get("/list-pokemons" , pokemonController.getAllPokemonsImage );
// router.get("/:name" , pokemonController.getPokemon );

module.exports = router;