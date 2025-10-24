import User from "../models/User.js";

async function register(email, password) {
    // const user = await User.findOne({ email })
    // if (user) {
    //     throw new Error('Email already exists')
    // }

    return User.create({ email, password });
}

export default {
    register,
}