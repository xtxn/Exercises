
import { html } from "../lib.js";
import { getById, update } from "../api/data.js";

const editTemplate = (solutionData, onEdit) => html`
        <section id="edit">
                <h2>Edit Motorcycle</h2>
                <div class="form">
                    <h2>Edit Motorcycle</h2>
                    <form class="edit-form" @submit=${onEdit}>
                        <input type="text" name="model" id="model" placeholder="Model" .value=${solutionData.model} />
                        <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" .value=${solutionData.imageUrl} />
                        <input type="number" name="year" id="year" placeholder="Year" .value=${solutionData.year} />
                        <input type="number" name="mileage" id="mileage" placeholder="mileage" .value=${solutionData.mileage} />
                        <input type="number" name="contact" id="contact" placeholder="contact" .value=${solutionData.contact} />
                        <textarea id="about" name="about" placeholder="about" rows="10" cols="50" .value=${solutionData.about}></textarea>
                        <button type="submit">Edit Motorcycle</button>
                    </form>
                </div>
            </section>`

export async function editView(ctx) {

    const id = ctx.params.id;
    const solutionData = await getById(id);

    ctx.render(editTemplate(solutionData, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const { model, imageUrl, year, mileage, contact, about } = Object.fromEntries(formData);

        const moto = {
            model,
            imageUrl,
            year,
            mileage,
            contact,
            about
        }

        try {
            if (!moto.model || !moto.imageUrl || !moto.year || !moto.mileage || !moto.contact || !moto.about) {
                throw new Error('Fill all fields');
            }

            await update(id, moto);
            ctx.page.redirect(`/details/${id}`);

        } catch (error) {
            alert(error.message);
        }
    }


}