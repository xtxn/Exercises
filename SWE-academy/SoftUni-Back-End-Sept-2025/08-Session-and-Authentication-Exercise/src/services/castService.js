import Cast from "../models/Cast.js";

function create(castData) {
    return Cast.create(castData);
}

function getAllCast(filter = {}) {
    let query = Cast.find()
    filter.includes ? query = query.in('_id', filter.includes) : query = [];
    return query;
}

export default {
    create,
    getAllCast,
}