import Blog from '../models/Blog.js'

function getOne(blogId) {
    return Blog.findById(blogId).populate('owner');
}

function getAll() {
    return Blog.find();
}

function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
    });
}

function getLatest() {
    return Blog.find()
        .sort({ _id: -1 })
        .limit(3)
}

export default {
    create,
    getAll,
    getLatest,
    getOne,
}