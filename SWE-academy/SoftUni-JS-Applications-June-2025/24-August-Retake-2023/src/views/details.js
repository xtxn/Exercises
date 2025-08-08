import { html, nothing } from "../lib.js";
import { deleteById, getById } from "../api/data.js";
import { getUserData } from "../utils/userSession.js";

const detailsTemplate = (motoData, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${motoData.imageUrl} alt="example1" />
        <p id="details-title">${motoData.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="year">Year: ${motoData.year}</p>
                <p class="mileage">Mileage: ${motoData.mileage} km.</p>
                <p class="contact">Contact Number: ${motoData.contact}</p>
                <p id="motorcycle-description">
                   ${motoData.about}
                </p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${isOwner ? html`
            <div id="action-buttons">
            <a href="/edit/${motoData._id}" id="edit-btn">Edit</a>
            <a href="" id="delete-btn" @click = ${onDelete}>Delete</a>
            </div>`
        : nothing}
        </div>
    </div>
</section>`

export async function detailsView(ctx) {
    const id = ctx.params.id;

    const motoData = await getById(id);

    const userData = getUserData();

    const isOwner = userData && motoData._ownerId == userData.id;

    ctx.render(detailsTemplate(motoData, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Do you want to delete ${motoData.type}`);
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/dashboard');
        }
    }
}