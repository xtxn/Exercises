import Blog from '../models/Blog.js'

function getOne(blogId) {
    return Blog.findById(blogId).populate(['owner', 'followers']);
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

function follow(blogId, userId) {
    return Blog.findByIdAndUpdate(blogId, { $push: { followers: userId } });
}

function remove(blogId, userId) {

    return Blog.findByIdAndDelete(blogId);
}

export default {
    create,
    getAll,
    getLatest,
    getOne,
    follow,
    remove,
}