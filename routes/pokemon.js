const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon');

// http://localhost:3000/api/v1/pokemons
router.get("/" , pokemonController.getAllPokemons );
router.get("/list-pokemons" , pokemonController.getAllPokemonsImage );
router.get("/:name" , pokemonController.getPokemon );

module.exports = router;