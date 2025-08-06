import { getById, update } from "../data/data.js";
import { html } from "../lib.js";

const editTemplate = (solutionData, onEdit) => html`
  <section id="edit">
    <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Edit Solution</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="type" id="type" placeholder="Solution Type" .value=${solutionData.type} />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${solutionData.imageUrl} />
            <textarea id="description" name="description" placeholder="Description" rows="2"
                cols="10" .value=${solutionData.description}></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10" .value=${solutionData.learnMore}></textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>
`

export async function editView(ctx) {

    const id = ctx.params.id;
    const solutionData = await getById(id);

    ctx.render(editTemplate(solutionData, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        const obj = {
            type: data.type,
            imageUrl: data['image-url'],
            description: data.description,
            learnMore: data['more-info'],
        }
        try {
            if (!obj.type || !obj.imageUrl || !obj.description || !obj.learnMore) {
                throw new Error('Fill all fields');
            }

            await update(id, obj);
            ctx.page.redirect(`/details/${id}`);

        } catch (error) {
            alert(error.message);
        }
    }
}