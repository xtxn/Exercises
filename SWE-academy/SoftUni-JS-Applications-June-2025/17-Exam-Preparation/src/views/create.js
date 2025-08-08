import { create } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form form-item">
        <h2>Add Drone Offer</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="model" id="model" placeholder="Drone Model" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" name="price" id="price" placeholder="Price" />
            <input type="number" name="weight" id="weight" placeholder="Weight" />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
            <input type="text" name="condition" id="condition" placeholder="Condition" />
            <textarea name="description" id="description" placeholder="Description"></textarea>
            <button type="submit">Add</button>
        </form>

    </div>
</section>`

export function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const { model, imageUrl, price, condition, weight, phone, description } = Object.fromEntries(formData);
        const drone = { model, imageUrl, price, condition, weight, phone, description };

        try {
            if (!model || !imageUrl || !price || !condition || !weight || !phone || !description) {
                throw new Error('All fields are required!');
            }
            await create(drone);
            ctx.page.redirect('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    }
}

