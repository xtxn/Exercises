import { Schema, Types, model } from "mongoose";

const mythSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Myth name is required'],
        minLength: [2, 'Name is too short'],
    },
    origin: {
        type: String,
        required: [true, 'Myth origin is required'],
        minLength: [3, 'Origin is too short'],
    },
    role: {
        type: String,
        required: [true, 'Myth role is required'],
        minLength: [2, 'Role is too short'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Myth image is required'],
        match: [/^https?:\/\//, 'Invalid image url'],
    },
    symbol: {
        type: String,
        required: [true, 'Myth symbol is required'],
        minLength: [3, 'The Symbol should be between 3 and 40 characters'],
        maxLength: [40, 'The Symbol should be between 3 and 40 characters'],
    },
    era: {
        type: String,
        required: [true, 'Myth era is required'],
        minLength: [5, 'The Era should be between 5 and 15 characters'],
        maxLength: [15, 'The Era should be between 5 and 15 characters'],
    },
    description: {
        type: String,
        required: [true, 'Myth description is required'],
        minLength: [10, 'Description is too short'],
    },
    likedList: [{
        type: Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true
});

const Myth = model('Myth', mythSchema);

export default Myth;