import Blog from '../models/Blog.js'

function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
    });
}

export default {
    create,
}