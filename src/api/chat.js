import axios from "@/axios";

const API_BASE_PATH =
    process.env.VUE_APP_SERVER_ADDRESS + process.env.VUE_APP_CHAT_API;

export default {
    get: query => {
        return axios.get(`${API_BASE_PATH}`, {
            params: query
        });
    },
    send: message => {
        return axios.post(`${API_BASE_PATH}`, message);
    },
    getAfter: lastMessageId => {
        return axios.get(`${API_BASE_PATH}/${lastMessageId}/after`);
    }
}