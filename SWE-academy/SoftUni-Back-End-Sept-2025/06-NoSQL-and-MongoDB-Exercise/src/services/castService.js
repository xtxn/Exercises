import Cast from "../models/Cast.js";

function create(castData) {
    return Cast.create(castData);
}

async function getAllCast() {
    return await Cast.find();
}

export default {
    create,
    getAllCast,
}