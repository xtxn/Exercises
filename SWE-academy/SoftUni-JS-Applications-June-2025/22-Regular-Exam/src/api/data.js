import { get, post, put, del } from "./api.js";

const endpoints = {
    all: '/data/mindfultips?sortBy=_createdOn%20desc',
    byId: '/data/mindfultips/',
    create: '/data/mindfultips',
}

export async function getAllTips() { return get(endpoints.all); }
export async function getTipById(id) { return get(endpoints.byId + id); }
export async function createTip(tip) { return post(endpoints.create, tip); }
export async function updateTip(id, record) { return put(endpoints.byId + id, record); }
export async function deleteTipById(id) { return del(endpoints.byId + id); }