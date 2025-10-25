import { Schema, Types, model } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Blog title is required']
    },
    imageUrl: {
        type: String,
        required: [true, 'Blog image url is required']
    },
    content: {
        type: String,
        required: [true, 'Blog content is required']
    },
    category: {
        type: String,
        required: [true, 'Blog category is required']
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
})

const Blog = model('Blog', blogSchema)

export default Blog;