import axios from "@/axios";

const API_BASE_PATH = process.env.VUE_APP_SERVER_ADDRESS +
    process.env.VUE_APP_MEMBER_API;

export default {
    signIn: member => {
        return axios.post(`${API_BASE_PATH}`, { name: member });
    },
    signOut: member => {
        return axios.delete(`${API_BASE_PATH}/${member}`);
    },
    getMembers: () => {
        return axios.get(`${API_BASE_PATH}`);
    }
};
