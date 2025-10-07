import Cast from "../models/Cast.js";

function create(castData) {
    return Cast.create(castData);
}

function getAllCast(filter = {}) {
    let query = Cast.find();

    if (filter.includes && filter.includes.length > 0) {
        query = query.in('_id', filter.includes);
    }

    if (filter.excludes && filter.excludes.length > 0) {
        query = query.nin('_id', filter.excludes);
    }

    return query;
}

export default {
    create,
    getAllCast,
}