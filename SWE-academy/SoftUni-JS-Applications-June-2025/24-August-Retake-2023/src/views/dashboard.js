import { html } from "../lib.js";
import { getAll } from "../api/data.js";

const cardTemplate = (moto) => html`
 <div class="motorcycle">
        <img src=${moto.imageUrl} alt="example1" />
        <h3 class="model">${moto.model}</h3>
        <p class="year">${moto.year}</p>
        <p class="mileage">Mileage: ${moto.mileage} km.</p>
        <p class="contact">Contact Number: ${moto.contact}</p>
        <a class="details-btn" href="/details/${moto._id}">More Info</a>
</div>
`

const dashboardTemplate = (motoData) => html`
<h2>Available Motorcycles</h2>
<section id="dashboard">
    ${motoData.length
        ? motoData.map(cardTemplate)
        : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`
    }
    </section>
`
export async function dashboardView(ctx) {
    const motoData = await getAll();
    ctx.render(dashboardTemplate(motoData));

}



