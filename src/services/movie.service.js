const movieRepository = require('../repositories/movie.repository');

async function listAllMovies() {
    return await movieRepository.listAllMovies();
}

async function getMovieById(id) {
    return await movieRepository.getMovieById(id);
}

module.exports = {
    listAllMovies,
    getMovieById,
};