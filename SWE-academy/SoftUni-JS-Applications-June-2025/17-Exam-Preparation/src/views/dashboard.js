import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const dashboardTemplate = (drones) => html`
<h3 class="heading">Marketplace</h3>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
${drones.length
        ? drones.map(droneCard)
        : html`<h3 class="no-drones">No Drones Available</h3>`}
</section>`

const droneCard = (drone) => html`
  <div class="drone">
        <img src=${drone.imageUrl} alt="example1" />
        <h3 class="model">${drone.model}</h3>
        <div class="drone-info">
            <p class="price">Price: €${drone.price}</p>
            <p class="condition">Condition: ${drone.condition}</p>
            <p class="weight">Weight: ${drone.weight}g</p>
        </div>
        <a class="details-btn" href="/details/${drone._id}">Details</a>
    </div>`

export async function dashboardView(ctx) {

    const drones = await getAll();
    ctx.render(dashboardTemplate(drones));
}

