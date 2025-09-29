import Movie from "../models/Movie.js";

async function getAllMovies(filter) {
    // const result = await Movie.find(filter).lean();
    const result = await Movie.find(filter)
    return result;
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