const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// http://localhost:3000/api/v1/posts
router.get("/" , postController.getAllPosts );
router.get("/:id", postController.getPost);
router.post("/new-post" , postController.createPost );
router.delete("/:id", postController.removePost);




// router.get("/list-pokemons" , pokemonController.getAllPokemonsImage );
// router.get("/:name" , pokemonController.getPokemon );

module.exports = router;