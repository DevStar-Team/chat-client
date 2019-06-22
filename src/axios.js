import Vue from "vue";
import axios from "axios";
import qs from "querystring";
import store from "./store";

axios.defaults.withCredentials = true;
axios.defaults.paramsSerializer = params => {
    return qs.stringify(params, "&", "=", { arrayFormat: "repeat" });
};

axios.interceptors.request.use(
    function (config) {
        //store.dispatch("startLoading");
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        //store.dispatch("endLoading");
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

Vue.prototype.$axios = axios;

export default axios;
