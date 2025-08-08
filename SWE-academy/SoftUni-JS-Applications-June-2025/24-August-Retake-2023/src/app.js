import { page } from "./lib.js";
import { addRender } from "./utils/render.js";

import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logout } from "./api/user.js";
import { updateNav } from "./views/nav.js";
import { dashboardView } from "./views/dashboard.js";
import { addView } from "./views/add.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { searchView } from "./views/search.js";

page(addRender);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/create', addView);
page('/details/:id', detailsView);
page('/edit/:id', editView);

page('/search', searchView);

page('/logout', async (ctx) => {
    await logout();
    updateNav();
    ctx.page.redirect('/');
});

updateNav();
page.start();