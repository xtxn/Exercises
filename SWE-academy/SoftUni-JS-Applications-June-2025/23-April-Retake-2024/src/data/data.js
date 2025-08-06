import { get, post, put, del } from "./request.js";

const endpoints = {
    all: '/data/solutions?sortBy=_createdOn%20desc',
    byId: '/data/solutions/',
    create: '/data/solutions',
}

export async function getAll() {
    return get(endpoints.all);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function create(obj) {
    return post(endpoints.create, obj);
}

export async function update(id, record) {
    return put(endpoints.byId + id, record);
}

export async function deleteById(id) {
    return del(endpoints.byId + id);
}