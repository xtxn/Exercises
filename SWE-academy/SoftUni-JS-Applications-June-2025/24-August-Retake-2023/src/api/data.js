import { get, post, put, del } from "./api.js";

const endpoints = {
    all: '/data/motorcycles?sortBy=_createdOn%20desc',
    byId: '/data/motorcycles/',
    create: '/data/motorcycles',
}

export async function getAll() { return get(endpoints.all); }
export async function getById(id) { return get(endpoints.byId + id); }

export async function create(motoData) { return post(endpoints.create, motoData); }
export async function update(id, record) { return put(endpoints.byId + id, record); }
export async function deleteById(id) { return del(endpoints.byId + id); }