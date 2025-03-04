const movieService = require('../services/movie.service');

async function listAllMovies(req, res) {
    try {
        const movies = await movieService.listAllMovies();
        console.log(movies); // Log the movies for debugging
        res.status(200).json(movies);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
}

async function getMovieById(req, res) {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listAllMovies,
    getMovieById,
};