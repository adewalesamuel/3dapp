import { Api } from './Api';

const  ENPOINTS = {
    Model3d: 'model3ds',
};

const getAll = (signal) => {
    return Api.get(`${ENPOINTS.Model3d}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Model3d}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Model3d + '/store', payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Model3d}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Model3d}/${id}`, signal)
}

export const Model3dService = {
    getAll,
    getById,
    create,
    update,
    destroy
}