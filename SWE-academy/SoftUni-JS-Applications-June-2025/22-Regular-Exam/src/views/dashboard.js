import { html } from "../lib.js";
import { getAllTips } from "../api/data.js";

const dashboardTemplate = (tipData) => html`
<h3 class="heading">Mindful Tips</h3>
<section id="tips-dashboard">
${tipData.length
        ? tipData.map(tip => tipCard(tip))
        : html`
    <h3 class="empty">No Mindful Tips Added Yet.</h3>`}
</section>`

const tipCard = (tip) => html`
<div class="tip">
        <img src=${tip.imageUrl} alt="example1" />
        <h3 class="title">${tip.title}</h3>
        <div class="tip-info">
            <p class="type">Type: ${tip.type}</p>
            <p class="difficulty">Difficulty: ${tip.difficulty}</p>
        </div>
        <a class="details-btn" href="/details/${tip._id}">View Tip</a>
    </div>`

export async function dashboardView(ctx) {

    const tipData = await getAllTips();

    ctx.render(dashboardTemplate(tipData));
}