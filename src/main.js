import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";
import i18n from "./i18n";

import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css"
import "vue-material/dist/theme/default.css"

import VueChatScroll from "vue-chat-scroll";

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(VueChatScroll)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
