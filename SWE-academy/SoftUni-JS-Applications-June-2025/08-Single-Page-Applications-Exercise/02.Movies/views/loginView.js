import { showView } from "../src/utils.js";

const loginView = document.getElementById('form-login');

export function showLogin() {
    showView(loginView);
}