import { page } from "./lib.js";
import { addRender } from "./utils/render.js";

import { updateNav } from "./views/nav.js";
import { homeView } from "./views/home.js";
import { dashboardView } from "./views/dashboard.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { logout } from "./api/user.js";


page(addRender);

page('/', homeView);
page('/dashboard', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);

page('/logout', async (ctx) => {
    await logout();
    updateNav();
    ctx.page.redirect('/');
});

updateNav();
page.start();