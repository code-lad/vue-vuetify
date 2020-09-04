import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Elearning from "@/views/Elearning";
import Message from "@/views/Message";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/elearning",
    name: "Elearning",
    component: Elearning,
  },
  {
    path: "/message",
    name: "Message",
    component: Message,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
