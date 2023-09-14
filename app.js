const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dotenv = require('dotenv').config()

const addressRoutes = require("./routes/address")
const pokemonRoutes = require("./routes/pokemon")
const moviesRoutes = require("./routes/movie")

/* const { API_PATH, PORT } = require('./variables') */

//Visualizacion del contenido del endpoint o envio del contenido
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("uploads"));
app.use('/uploads', express.static('uploads'));

app.use(`/${process.env.API_PATH}/addresses`, addressRoutes);
app.use(`/${process.env.API_PATH}/pokemons`, pokemonRoutes);
app.use(`/${process.env.API_PATH}/movies`, moviesRoutes);

module.exports = app
