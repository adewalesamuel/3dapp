import { Api } from './Api';

const  ENPOINTS = {
    View: 'views',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.View}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.View}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(`${ENPOINTS.View}/store`, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.View}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.View}/${id}`, signal)
}

export const ViewService = {
    getAll,
    getById,
    create,
    update,
    destroy
}