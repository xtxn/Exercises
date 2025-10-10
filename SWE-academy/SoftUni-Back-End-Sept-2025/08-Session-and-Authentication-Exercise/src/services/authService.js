import bcrypt from 'bcrypt';
import User from "../models/User.js";
import { generateAuthToken } from '../utils/tokenUtils.js';

async function register(userData) {
    const user = await User.create(userData);

    const token = generateAuthToken(user);

    return token;
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid user or password');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid user or password')
    }

    const token = generateAuthToken(user);
    return token
}

export default {
    register,
    login,
};