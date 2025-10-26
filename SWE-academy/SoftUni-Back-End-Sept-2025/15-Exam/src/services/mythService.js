import Myth from "../models/Myth.js";

function create(mythData, userId) {
    return Myth.create({
        ...mythData,
        owner: userId,
    });
}

function getAll() {
    return Myth.find();
}

export default {
    create,
    getAll,
}