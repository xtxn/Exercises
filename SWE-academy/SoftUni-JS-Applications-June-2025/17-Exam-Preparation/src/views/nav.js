import { html, render } from "../lib.js";
import { getUserData } from "../utils/userSession.js";

const navTemplate = (userData) => html`
<div>
        <a href="/dashboard">Marketplace</a>
</div>
${userData
        ? html`
    <div class="user">
        <a href="/create">Sell</a>
        <a href="/logout">Logout</a>
    </div>`
        : html`
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`
    }`

export function updateNav() {

    const userData = getUserData();
    render(navTemplate(userData), document.querySelector('nav'));
}