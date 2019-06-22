import Vue from "vue";
import Vuex from "vuex";
import users from "@/api/users";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    isAuth: false,
    talkerName: null,
    activeLoading: false,
    menuVisible: false
  },
  mutations: {
    talkerName(state, talkerName) {
      state.isAuth = talkerName != null;
      state.talkerName = talkerName;
    },
    menuVisible(state, menuVisible) {
      state.menuVisible = menuVisible;
    }
  },
  actions: {
    signIn({ commit }, talkerName) {
      commit("talkerName", talkerName);
    },
    signOut({ commit }) {
      commit("talkerName", null);
    }
  }
});
