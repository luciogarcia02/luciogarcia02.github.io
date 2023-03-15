import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Bio from "./components/Bio.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import Videos from "./components/Videos.vue";
import ActrizExp from "./components/ActrizExp.vue";
import RealizadoraExp from "./components/RealizadoraExp.vue";

import { PiniaVuePlugin, createPinia } from "pinia";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "dropdown";



const routes = [
  { path: "/", component: Home },
  {
    path: "/bio", component: Bio,
  },{
    path: "/bio/actriz", component: ActrizExp,
  },{
    path: "/bio/realizadora", component: RealizadoraExp,
  },
  {
    path: "/photos", component: PhotoGallery
  },
  {
    path: "/videos", component: Videos
  },
  {
    path: "*",
    redirect: "/",
  },
];

//paso 2
const router = new VueRouter({
  routes,
});

//paso 3
Vue.use(VueRouter); //injecta algunos utiles.


new Vue({
  router,
  pinia, //paso 4
  render: (h) => h(App),
}).$mount("#app");