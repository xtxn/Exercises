import Cast from "../models/Cast.js";

function create(castData) {
    return Cast.create(castData);
}

export default {
    create,
}