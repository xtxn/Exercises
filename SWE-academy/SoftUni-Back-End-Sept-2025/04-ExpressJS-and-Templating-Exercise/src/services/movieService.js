import Movie from "../models/Movie.js";

async function getAllMovies() {
    return await Movie.find();
};

async function createMovie(movieData) {
    const movie = new Movie(movieData);
    await movie.save();
}

export default {
    getAllMovies,
    createMovie,
}