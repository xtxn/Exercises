import { showView } from "../src/utils.js";

const registerView = document.getElementById('form-sign-up');

export function showRegister() {
    showView(registerView);
}