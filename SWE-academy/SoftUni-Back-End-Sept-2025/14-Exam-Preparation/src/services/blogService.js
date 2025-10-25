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

async function remove(blogId, userId) {
    const blog = await Blog.findById(blogId);

    if (!blog.owner.equals(userId)) {
        throw new Error('Cannot delete if not owner');
    }

    return Blog.findByIdAndDelete(blogId);
}

function edit(blogId, blogData) {

    return Blog.findByIdAndUpdate(blogId, blogData, { runValidators: true });
}

function getAllByOwner(ownerId) {
    return Blog.find({ owner: ownerId });
}

function getAllByFollower(followerId) {
    return Blog.find().in('followers', followerId);
}

export default {
    create,
    getAll,
    getLatest,
    getOne,
    follow,
    remove,
    edit,
    getAllByOwner,
    getAllByFollower,
}