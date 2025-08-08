import { page } from "./lib.js";
import { addRender } from "./utils/render.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { registerView } from "./views/register.js";
import { logout } from "./api/user.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { createView } from "./views/create.js";
import { editView } from "./views/edit.js";

page(addRender);

// TODO Bind project URLs to view handlers

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/create', createView)
page('/details/:id', detailsView)
page('/edit/:id', editView)

page('/logout', async (ctx) => {
    await logout();
    updateNav();
    ctx.page.redirect('/');
});

updateNav();
page.start();