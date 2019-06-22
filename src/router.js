import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const contextPath = process.env.VUE_APP_CONTEXT_PATH;

const routes = [
  {
    path: contextPath + "/",
    name: "chatroom",
    component: () => import("@/views/ChatRoom.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: contextPath + "/profile",
    name: "profile",
    component: () =>
      import("@/views/Profile.vue")
  },
  {
    path: "*",
    name: "pageNotFound",
    component: () =>
      import(/* webpackChunkName: "group-error" */ "@/views/PageNotFound.vue")
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  store.commit("menuVisible", false);
  if (to.matched.some(item => item.meta.requiresAuth)) {
    if (!store.state.isAuth) {
      next({
        name: "profile"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
