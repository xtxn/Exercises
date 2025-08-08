import { html } from "../lib.js";
import { create } from "../api/data.js";

const addTemplate = (onCreate) => html`
<section id="create">
    <h2>Add Motorcycle</h2>
    <div class="form">
        <h2>Add Motorcycle</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="model" id="model" placeholder="Model" />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
            <input type="number" name="year" id="year" placeholder="Year" />
            <input type="number" name="mileage" id="mileage" placeholder="mileage" />
            <input type="text" name="contact" id="contact" placeholder="contact" />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
            <button type="submit">Add Motorcycle</button>
        </form>
    </div>
</section>
`

export function addView(ctx) {
    ctx.render(addTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const { model, imageUrl, year, mileage, contact, about } = Object.fromEntries(formData);
        const motoData = {
            model,
            imageUrl,
            year,
            mileage,
            contact,
            about
        }

        try {
            if (!model || !imageUrl || !year || !mileage || !contact || !about) {
                throw new Error('All fields are required!');
            }
            await create(motoData);

            ctx.page.redirect('/dashboard');

        } catch (error) {
            alert(error.message)
        }
    }
}


