import User from "../models/User.js";
import bcrypt from 'bcrypt';
import { generateAuthToken } from "../utils/tokenUtils.js";

async function register(email, password, repeatPass) {
    const user = await User.findOne({ email })

    if (user) {
        throw new Error('Email already exists')
    }

    if (password !== repeatPass) {
        throw new Error('Password mismatch')
    }

    const createdUser = await User.create({ email, password });

    return generateAuthToken(createdUser)
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    return generateAuthToken(user);
}

export default {
    register,
    login,
}