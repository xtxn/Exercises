import { Schema, Types, model } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Blog title is required'],
        minLength: [5, 'Title is too short'],
        maxLength: [50, 'Title is too long'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Blog image url is required'],
        match: [/^https?:\/\//, 'Invalid image url']
    },
    content: {
        type: String,
        required: [true, 'Blog content is required'],
        minLength: [10, 'Content is too short'],
    },
    category: {
        type: String,
        required: [true, 'Blog category is required'],
        minLength: [3, 'Category is too short'],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
    followers: [{
        type: Types.ObjectId,
        ref: 'User',
    }]
})

const Blog = model('Blog', blogSchema)

export default Blog;