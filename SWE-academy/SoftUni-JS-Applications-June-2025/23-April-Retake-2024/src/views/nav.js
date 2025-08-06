import { html, render } from "../lib.js";
import { getUserData } from "../utils/utils.js";

const navTemplate = (user) => html`
    <div>
        <a href="/dashboard">Solutions</a>
    </div>
    ${user
        ? html`
        <div class="user">
            <a href="/create">Add Solution</a>
            <a href="/logout" id="logoutBtn">Logout</a>
        </div> `
        : html`
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    `}`

export function updateNav() {
    const user = getUserData();
    render(navTemplate(user), document.querySelector('nav'));
}


