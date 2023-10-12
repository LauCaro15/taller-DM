const express = require('express');
const Movie = require('../models/movie');
const axios = require('axios');
const fetch = require('node-fetch')

const castMovies = ( data ) => {

    const url = "https://image.tmdb.org/t/p/original" ;
    const movies = data.results.map( m => {
        let the_movie = {
            name: m.title ,
            poster: url + m.poster_path
        }
        /* if ( !the_movie.poster || the_movie.poster==null || the_movie.poster=="https://image.tmdb.org/t/p/originalnull" ) {
            return null ;
        } */
        return the_movie
    });

    return movies

}

const getMovies = async (req, res)=>{
    try {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=947b8817157363ba9360dc22c51c2450"
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data)
    } catch (err) {
        console.error(err)
    }
};

const getMoviesCast = async (req, res)=>{
    try {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=947b8817157363ba9360dc22c51c2450&page=500"
        const response = await fetch(url);
        const data = castMovies( await response.json() );
        res.status(200).json(data)
    } catch (err) {
        console.error(err)
    }
};

const queryMovie = async (req, res) => {
    const search = req.params.search;
    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=947b8817157363ba9360dc22c51c2450&query=${search}`
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data)
    } catch (err) {
        console.error(err)
    }
};

module.exports = { getMovies , getMoviesCast , queryMovie }
