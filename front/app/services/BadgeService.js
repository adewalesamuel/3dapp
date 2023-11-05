import { Api } from './Api';

const  ENPOINTS = {
    Badge: 'badges',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Badge}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Badge}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Badge +  '/store', payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Badge}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Badge}/${id}`, signal)
}

export const BadgeService = {
    getAll,
    getById,
    create,
    update,
    destroy
}