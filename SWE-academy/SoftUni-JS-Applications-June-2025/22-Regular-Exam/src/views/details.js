import { html, nothing } from "../lib.js";
import { deleteTipById, getTipById } from "../api/data.js";
import { getUserData } from "../utils/userSession.js";

const detailsTemplate = (tip, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <div>
            <img id="details-img" src=${tip.imageUrl} alt="example1" />
            <p id="details-title">${tip.title}</p>
        </div>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="details-type">Type: ${tip.type}</p>
                <p class="details-difficulty">
                    Difficulty: ${tip.difficulty}
                </p>
                <p id="tip-description">
                    ${tip.description}
                </p>
            </div>
            ${isOwner
        ? html`   
                <div id="action-buttons">
                <a href="/edit/${tip._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>`
        : nothing}     
        </div>
    </div>
</section>`

export async function detailsView(ctx) {

    const id = ctx.params.id
    const tip = await getTipById(id);
    const userData = getUserData();

    const isOwner = userData && userData.id == tip._ownerId;

    async function onDelete() {
        const result = confirm(`Do you want to delete ${tip.title}`);
        if (result) {
            await deleteTipById(id);
            ctx.page.redirect('/dashboard');
        }
    }
    ctx.render(detailsTemplate(tip, isOwner, onDelete));
}
