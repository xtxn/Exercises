import User from "../models/User.js";

function register(email, password) {
    return User.create({ email, password });
}

export default {
    register,
}