import User from "../models/User.js";
import bcrypt from 'bcrypt';

async function register(email, password) {
    const user = await User.findOne({ email })

    if (user) {
        throw new Error('Email already exists')
    }

    return User.create({ email, password });
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
}

export default {
    register,
    login,
}