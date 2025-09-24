import Movie from "../models/Movie.js";

async function getAllMovies() {
    return await Movie.find();
};

export default {
    getAllMovies,
}