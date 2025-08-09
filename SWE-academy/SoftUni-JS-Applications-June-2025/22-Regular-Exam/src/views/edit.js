import { html } from "../lib.js";
import { getTipById, updateTip } from "../api/data.js";
import { showError } from "../utils/notify.js";

const editTemplate = (tip, onEdit) => html`
<section id="edit">
    <div class="form form-item">
        <h2>Edit Your Item</h2>
        <form class="edit-form" @submit = ${onEdit}>
            <input type="text" name="title" id="title" placeholder="Title" .value=${tip.title} />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" .value=${tip.imageUrl} />
            <input type="text" name="type" id="type" placeholder="Type" .value=${tip.type} />
            <select name="difficulty" id="difficulty">
                <option value="" disabled>Difficulty</option>
                <option value="Easy" ?selected=${tip.difficulty === 'Easy'}>Easy</option>
                <option value="Medium" ?selected=${tip.difficulty === 'Medium'}>Medium</option>
                <option value="Hard" ?selected=${tip.difficulty === 'Hard'}>Hard</option>
            </select>
            <textarea id="description" name="description" placeholder="Description" rows="2"
                cols="50" .value=${tip.description}></textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>`

export async function editView(ctx) {

    const id = ctx.params.id;
    const tip = await getTipById(id);

    ctx.render(editTemplate(tip, onEdit));


    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            if (!data.title || !data.imageUrl || !data.type || !data.difficulty || !data.description) {
                throw new Error('All fields are required!')
            }

            await updateTip(id, data);
            ctx.page.redirect(`/details/${id}`);

        } catch (error) {
            // alert(error.message);
            showError(error.message);
        }
    }
}
