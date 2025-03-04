const { models } = require('../../config/db');
const Movie = models.Movie;

async function listAllMovies() {
    const movies = await Movie.findAll();
    return movies;
}

async function getMovieById(id) {
    const movie = await Movie.findByPk(id);
    return movie;
}

module.exports = {
    listAllMovies,
    getMovieById
}
