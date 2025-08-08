import { getById, update } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (droneData, onEdit) => html`
<section id="edit">
    <div class="form form-item">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="model" id="model" placeholder="Drone Model" .value=${droneData.model} />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" .value=${droneData.imageUrl} />
            <input type="number" name="price" id="price" placeholder="Price" .value=${droneData.price} />
            <input type="number" name="weight" id="weight" placeholder="Weight" .value=${droneData.weight} />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" .value=${droneData.phone} />
            <input type="text" name="condition" id="condition" placeholder="Condition" .value=${droneData.condition} />
            <textarea name="description" id="description" placeholder="Description" .value=${droneData.description}></textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>`

export async function editView(ctx) {

    const id = ctx.params.id;
    const droneData = await getById(id);

    ctx.render(editTemplate(droneData, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const { model, imageUrl, price, condition, weight, phone, description } = Object.fromEntries(formData);

        const drone = { model, imageUrl, price, condition, weight, phone, description };
        try {
            if (!model || !imageUrl || !price || !condition || !weight || !phone || !description) {
                throw new Error('All fields are required!');
            }

            await update(id, drone);
            ctx.page.redirect(`/details/${id}`);
        } catch (error) {
            alert(error.message)
        }
    }
}
