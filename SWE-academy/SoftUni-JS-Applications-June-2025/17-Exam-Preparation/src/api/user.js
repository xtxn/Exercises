import { clearUserData, setUserData } from "../utils/userSession.js";
import { get, post } from "./api.js";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

// TODO Change identity if required by exam description
export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });

    const userData = {
        id: result._id,
        accessToken: result.accessToken,
    };

    setUserData(userData);
}

// TODO Change identity if required by exam description
export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });

    const userData = {
        id: result._id,
        accessToken: result.accessToken,
    };

    setUserData(userData);
}

export function logout() {
    get(endpoints.logout);
    clearUserData();
}
