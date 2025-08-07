import { page } from "./lib.js";
import { addRender } from "./utils/render.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { registerView } from "./views/register.js";

page(addRender);


// TODO Bind project URLs to view handlers



page('/', homeView);
page('/login', loginView)
page('/register', registerView)


updateNav();
page.start();