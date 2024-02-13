import { createRouter, createWebHashHistory } from "vue-router";

import MovieView from "./views/MovieView.vue";
import HomeView from "./views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: MovieView,
      path: "/movie/:title",
    },
    {
      component: HomeView,
      path: "/",
    },
  ],
});
