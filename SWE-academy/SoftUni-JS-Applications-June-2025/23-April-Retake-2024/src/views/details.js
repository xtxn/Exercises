import { deleteById, getById } from "../data/data.js";
import { html, nothing } from "../lib.js";
import { getUserData } from "../utils/utils.js";

const detailsTemplate = (solution, isOwner, onDelete) => html`
     <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${solution.imageUrl} alt="example1" />
            <div>
                <p id="details-type">${solution.type}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">
                            ${solution.description}
                        </p>
                        <p id="more-info">
                            ${solution.learnMore}
                        </p>
                    </div>
                </div>
                <h3>Like Solution:<span id="like">0</span></h3>
${isOwner
        ? html`
        <div id="action-buttons">
            <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click = ${onDelete}>Delete</a>`
        : nothing}
                <!--Edit and Delete are only for creator-->
                <!--Bonus - Only for logged-in users ( not authors )-->
                    <a href="#" id="like-btn">Like</a>
                </div>
            </div>
        </div>
    </section>
`

export async function detailsView(ctx) {
    const id = ctx.params.id;

    const solution = await getById(id);

    const userData = getUserData();

    const isOwner = userData && solution._ownerId == userData.id;

    ctx.render(detailsTemplate(solution, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Do you want to delete ${solution.type}`);
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/dashboard');
        }
    }
}