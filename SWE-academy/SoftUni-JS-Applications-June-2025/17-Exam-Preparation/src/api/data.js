import { get, post, put, del } from "./api.js";

const endpoints = {
    all: '/data/drones?sortBy=_createdOn%20desc',
    byId: '/data/drones/',
    create: '/data/drones',
}

export async function getAll() { return get(endpoints.all); }
export async function getById(id) { return get(endpoints.byId + id); }
export async function create(drone) { return post(endpoints.create, drone); }
export async function update(id, record) { return put(endpoints.byId + id, record); }
export async function deleteById(id) { return del(endpoints.byId + id); }