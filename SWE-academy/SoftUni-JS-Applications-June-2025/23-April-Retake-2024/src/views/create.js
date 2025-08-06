import { create } from "../data/data.js";
import { html } from "../lib.js";

const createTemplate = (onCreate) => html`
   <section id="create">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Solution</h2>
            <form class="create-form" @submit=${onCreate}>
                <input type="text" name="type" id="type" placeholder="Solution Type" />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                <textarea id="description" name="description" placeholder="Description" rows="2"
                    cols="10"></textarea>
                <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
                <button type="submit">Add Solution</button>
            </form>
        </div>
    </section>`

export function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
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
            await create(obj);

            ctx.page.redirect('/dashboard');

        } catch (error) {
            alert(error.message);
        }
    }
}