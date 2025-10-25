import Blog from '../models/Blog.js'

function getAll() {
    return Blog.find();
}

function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
    });
}

export default {
    create,
    getAll,
}