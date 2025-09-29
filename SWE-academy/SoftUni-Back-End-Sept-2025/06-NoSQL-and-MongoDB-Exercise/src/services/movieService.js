import Movie from "../models/Movie.js";

async function getAllMovies(filter = {}) {
    let query = Movie.find();

    if (filter.title) {

        query = query.find({ title: { $regex: filter.title, $options: 'i' } });
    }

    if (filter.genre) {

        query = query.find({ genre: { $regex: new RegExp(`^${filter.genre}$`), $options: 'i' } })
    }

    if (filter.year) {
        query = query.where('year').equals(filter.year);
    }

    return await query.lean();
};

async function createMovie(movieData) {

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