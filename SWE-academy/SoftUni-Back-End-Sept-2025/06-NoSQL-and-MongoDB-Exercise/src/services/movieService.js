import Movie from "../models/Movie.js";

async function getAllMovies(filter) {
    const result = await Movie.find(filter).lean();
    // const result = await Movie.find(filter)
    return result;
};

async function createMovie(movieData) {
    // const movie = new Movie(movieData);
    // await movie.save();

    return await Movie.create(movieData)
}

async function getOneMovie(movieId) {
    return await Movie.findOne({ _id: movieId }).lean();
}

export default {
    getAllMovies,
    createMovie,
    getOneMovie,
}