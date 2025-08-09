import { html } from "../lib.js";
import { createTip } from "../api/data.js";
import { showError } from "../utils/notify.js";

const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form form-item">
        <h2>Share Your Tip</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="title" id="title" placeholder="Title" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="text" name="type" id="type" placeholder="Type" />
            <select name="difficulty" id="difficulty">
                <option value="" disabled selected>Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <textarea id="description" name="description" placeholder="Description" rows="2"
                cols="50"></textarea>
            <button type="submit">Add</button>
        </form>
    </div>
</section>`

export function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            if (!data.title || !data.imageUrl || !data.type || !data.difficulty || !data.description) {
                throw new Error('All fields are required!')
            }

            await createTip(data);
            ctx.page.redirect('/dashboard');

        } catch (error) {
            // alert(error.message);
            showError(error.message);
        }
    }
}

