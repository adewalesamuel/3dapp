import { Api } from './Api';

const  ENPOINTS = {
    Reward: 'rewards',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Reward}/?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Reward}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Reward, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Reward}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Reward}/${id}`, signal)
}

export const RewardService = {
    getAll,
    getById,
    create,
    update,
    destroy
}