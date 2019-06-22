import axios from "@/axios";

const API_BASE_PATH =
    process.env.VUE_APP_GATEWAY_URI + process.env.VUE_APP_MD_USER_API;
const OAUTH_API_BASE_PATH =
    process.env.VUE_APP_GATEWAY_URI + process.env.VUE_APP_USER_API;

export default {
    oAuthMe: () => {
        return axios.get(`${OAUTH_API_BASE_PATH}/me`);
    },
    me: () => {
        return axios.get(`${API_BASE_PATH}/me`);
    },
    get: id => {
        return axios.get(`${API_BASE_PATH}/${id}`);
    },
    create: data => {
        return axios.post(`${API_BASE_PATH}`, data);
    },
    modify: data => {
        return axios.put(`${API_BASE_PATH}/${data.id}`, data);
    },
    remove: id => {
        return axios.delete(`${API_BASE_PATH}/${id}`, id);
    },
    list: query => {
        return axios.get(`${API_BASE_PATH}`, {
            params: query
        });
    },
    listAll: query => {
        return axios.get(`${API_BASE_PATH}/all`, {
            params: query
        });
    },
    signUp: data => {
        return axios.post(`${API_BASE_PATH}/signup`, data);
    },
    getGroups: id => {
        return axios.get(`${API_BASE_PATH}/${id}/groups`);
    },
    joinGroups: (id, groups) => {
        return axios.post(`${API_BASE_PATH}/${id}/groups`, groups);
    },
    leaveGroups: (id, groups) => {
        return axios.delete(`${API_BASE_PATH}/${id}/groups`, {
            params: {
                groupIds: groups
            }
        });
    }
};
