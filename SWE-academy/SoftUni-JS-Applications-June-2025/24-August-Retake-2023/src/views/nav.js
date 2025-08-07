import { html, render } from "../lib.js";
import { getUserData } from "../utils/userSession.js";

const navTemplate = (user) => html`
    <div>
        <a href="#">Motorcycles</a>
        <a href="/search">Search</a>
    </div>
${user
        ? html`
<div class="user">
    <a href="#">Add Motorcycle</a>
    <a href="javascript:void(0)">Logout</a>
</div>`
        : html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`}`

export function updateNav() {
    const userData = getUserData();
    render(navTemplate(userData), document.querySelector('nav'));
}
