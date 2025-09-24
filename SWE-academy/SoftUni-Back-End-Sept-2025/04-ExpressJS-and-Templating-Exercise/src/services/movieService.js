import Movie from "../models/Movie.js";

async function getAllMovies() {
    return await Movie.find();
};

async function createMovie(movieData) {
    const movie = new Movie(movieData);
    await movie.save();
}

async function getOneMovie(movieId) {
    return await Movie.findOne(movieId);
}

export default {
    getAllMovies,
    createMovie,
    getOneMovie,
}