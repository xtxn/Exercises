import { html } from "../lib.js";
import { login } from "../api/user.js";
import { updateNav } from "./nav.js";

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onLogin}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`
export function loginView(ctx) {
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            if (!email || !password) {
                throw new Error('All fields are Required!')
            }

            await login(email, password);

            updateNav();
            ctx.page.redirect('/');

        } catch (error) {
            alert(error.message);
        }
    };
};