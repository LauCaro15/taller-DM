const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies")

/* http://localhost:3000/api/v1/movies */
router.get("/", moviesController.getMovies);

/* http://localhost:3000/api/v1/movies/cast */
router.get("/cast", moviesController.getMoviesCast);

/* http://localhost:3000/api/v1/movies/hada */
router.get("/:search", moviesController.queryMovie);

module.exports = router;
