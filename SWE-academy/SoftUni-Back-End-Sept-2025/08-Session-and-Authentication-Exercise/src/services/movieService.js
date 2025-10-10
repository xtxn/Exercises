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

async function createMovie(movieData, userId) {

    return await Movie.create({
        ...movieData,
        creator: userId,
    });
}

async function getOneMovie(movieId) {
    return await Movie.findOne({ _id: movieId }).lean();
}

async function attach(movieId, castId) {
    const movie = await Movie.findById(movieId);
    if (!movie.casts.includes(castId)) {
        movie.casts.push(castId);
        return movie.save();
    }
}

async function del(movieId) {
    return Movie.findByIdAndDelete(movieId);
}

async function edit(movieId, movieData) {
    return Movie.findByIdAndUpdate(movieId, movieData);
}

export default {
    getAllMovies,
    createMovie,
    getOneMovie,
    attach,
    del,
    edit,
}