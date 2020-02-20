import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes: [
    {
      path: "*",
      name: "Page not found",
    //   component: PageNotFound
    },

    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home")
    },
    
    {
      path: "/setup",
      name: "Setup",
      component: () => import("./views/Setup")
    }
  ]
});

router.beforeEach((to, from, next) => {
    if (store.getters.missingSettings.length > 0 && to.path !== '/setup') {
      store.commit("SAVE_CURRENT_ROUTE", from.path);
      next('/setup')
    } else {
      next();
    }
})

export default router;
