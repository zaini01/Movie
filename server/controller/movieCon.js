const axios = require('axios');
require('dotenv').config()
const key = process.env.KEY;

class MovieCon {
    static async getTopRated(req,res,next){
        const now = new Date().getFullYear()
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&primary_release_date.gte=${now}-01-01&primary_release_date.lte=${now}-12-31`
        try {
            const movies = await axios(url)
            res.send(movies.data.results)
        } catch (error) {
            next(error);
        }
    }

    static async getMovies(req,res,next){
        let title = req.params.title
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${key}`
        try {
            const movies = await axios(url)
            res.send(movies.data.results)
        } catch (error) {
            next(error);
        }
    }

    static async detailMovie(req,res,next){
        let id = req.params.id
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=credits`
        try {
            const movie = await axios(url)
            res.send(movie.data)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = MovieCon