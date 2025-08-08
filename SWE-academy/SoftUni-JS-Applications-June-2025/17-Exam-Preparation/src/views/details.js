import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { getUserData } from "../utils/userSession.js";

const detailsTemplate = (drone, isOwner, onDelete) => html`

 <section id="details">
    <div id="details-wrapper">
        <div>
            <img id="details-img" src=${drone.imageUrl} alt="example1" />
            <p id="details-model">${drone.model}</p>
        </div>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="details-price">Price: €${drone.price}</p>
                <p class="details-condition">Condition: ${drone.condition}</p>
                <p class="details-weight">Weight:${drone.weight}g</p>
                <p class="drone-description">
                    ${drone.description}
                </p>
                <p class="phone-number">Phone: ${drone.phone}</p>
            </div>
            ${isOwner
        ? html`
            <!--Edit and Delete are only for creator-->
            <div class="buttons">
                <a href="/edit/${drone._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>`
        : nothing}
        </div>
    </div>
</section >`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const drone = await getById(id);
    const userData = getUserData();

    const isOwner = userData && userData.id == drone._ownerId;

    ctx.render(detailsTemplate(drone, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Do you want to delete ${drone.model}`)

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/dashboard');
        }
    }
}

