const express = require('express');
const router = express.Router();
const Address = require('../models/pokemon');
const axios = require('axios');

const getAllPokemons = async (req, res) => {
    try {
        const url = "https://pokeapi.co/api/v2/pokemon/"
        const response = await fetch(url);
        const data = await response.json();
        // Extraer nombres de departamentos y eliminar duplicados
        // const pokemons = [...new Set(data.map(item => item.name))];
        // Renderizar una vista o enviar una respuesta JSON con los departamentos
        // Puedes usar res.render() o res.json() según tu configuración de vistas
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los pokemones.' });
    }
  };

  const getPokemon = async (req, res) => {
    try {
        const pokemon = req.params.name;
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

        const response = await fetch(url);
        const data = await response.json();
        // Extraer nombres de departamentos y eliminar duplicados
        // const pokemons = [...new Set(data.map(item => item.name))];
        // Renderizar una vista o enviar una respuesta JSON con los departamentos
        // Puedes usar res.render() o res.json() según tu configuración de vistas
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los pokemones.' });
    }
  };

  const getAllPokemonsImage = async (req, res) => {
    try {
        const url = "https://pokeapi.co/api/v2/pokemon/"
        const response = await fetch(url);
        const data = await response.json();

        // const pokemonDataArray = [];
    
        // for (const pokemon of data.results) {
        //     const responsePokemon = await fetch(pokemon.url);
        //     const dataPokemon = await responsePokemon.json();
      
        //     const pokemonObj = {
        //       nombre: dataPokemon.name,
        //       imagen: dataPokemon.sprites.front_default,
        //     };
      
        //     pokemonDataArray.push(pokemonObj);
        // }

        const pokemonUrls = data.results.map(pokemon => pokemon.url);

        const pokemonDataArray = await Promise.all(
        pokemonUrls.map(async url => {
            const responsePokemon = await fetch(url);
            const dataPokemon = await responsePokemon.json();
            return {
            nombre: dataPokemon.name,
            imagen: dataPokemon.sprites.front_default,
            };
        })
        );

        // Renderizar una vista o enviar una respuesta JSON con los departamentos
        // Puedes usar res.render() o res.json() según tu configuración de vistas
        res.status(200).json(pokemonDataArray);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los pokemones.' });
    }
  };

exports = module.exports = {
    getAllPokemons,
    getPokemon,
    getAllPokemonsImage,
}