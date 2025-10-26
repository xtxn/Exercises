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

function getSorted() {
    return Myth.find()
        .sort({ _id: -1 })
        .limit(3)
}

export default {
    create,
    getAll,
    getSorted,
}