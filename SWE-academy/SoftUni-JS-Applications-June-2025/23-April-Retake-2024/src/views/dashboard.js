import { getAll } from "../data/data.js";
import { html } from "../lib.js";

const dashboardTemplate = (solutions) => html`
    <h2>Solutions</h2>
        <section id="solutions">
        ${solutions.length
        ? solutions.map(solutionCard)
        : html`<h2 id = "no-solution" > No Solutions Added.</h2>`}
        </section >`

const solutionCard = (solution) => html`
    <div class="solution">
        <img src="${solution.imageUrl}" alt="example1" />
        <div class="solution-info">
            <h3 class="type">${solution.type}</h3>
            <p class="description">
                ${solution.description}
            </p>
            <a class="details-btn" href="/details/${solution._id}">Learn More</a>
        </div>
    </div>`

export async function dashboardView(ctx) {
    const solutions = await getAll();
    ctx.render(dashboardTemplate(solutions));
}

