import Myth from "../models/Myth.js";

function create(mythData, userId) {
    return Myth.create({
        ...mythData,
        owner: userId,
    });
}

function getOne(mythId) {
    return Myth.findById(mythId).populate('owner');
}

function getAll() {
    return Myth.find();
}

function getSorted() {
    return Myth.find()
        .sort({ _id: -1 })
        .limit(3);
}

async function like(mythId, userId) {
    const myth = await Myth.findById(mythId);

    if (myth.owner.equals(userId)) {
        throw new Error('Cannot like a myth that you\'ve created');
    };

    return Myth.findByIdAndUpdate(mythId, { $push: { likedList: userId } });
}

async function remove(mythId, userId) {
    const myth = await Myth.findById(mythId);

    if (!myth.owner.equals(userId)) {
        throw new Error('Cannot delete myth if not the creator')
    };

    return Myth.findByIdAndDelete(mythId);
}

function edit(mythId, mythData) {
    return Myth.findByIdAndUpdate(mythId, mythData, { runValidators: true });
}

export default {
    create,
    getAll,
    getSorted,
    getOne,
    like,
    remove,
    edit,
}