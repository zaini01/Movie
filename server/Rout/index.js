const rout = require("express").Router();
const movies = require("../controller/movieCon");

rout.get("/", movies.getTopRated);
rout.get("/movie/id/:id", movies.detailMovie);
rout.get("/movie/title/:title", movies.getMovies);

module.exports = rout;
