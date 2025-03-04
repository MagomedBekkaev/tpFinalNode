const movieRepository = require('../repositories/movie.repository');

async function listAllMovies() {
    return await movieRepository.listAllMovies();
}

async function getMovieById(id) {
    return await movieRepository.getMovieById(id);
}

async function createMovie(movieData) {
    return await movieRepository.createMovie(movieData);
}

async function updateMovie(id, movieData) {
    return await movieRepository.updateMovie(id, movieData);
}

async function deleteMovie(id) {
    return await movieRepository.deleteMovie(id);
}

module.exports = {
    listAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie 
};