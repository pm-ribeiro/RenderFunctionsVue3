import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import TVFinder from "/src/views/TVFinder.vue";
import HeaderExample from "/src/views/HeaderExample.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TVFinder',
    name: 'TVFinder',
    component: TVFinder
  },
  {
    path: '/HeaderExample',
    name: 'HeaderExample',
    component: HeaderExample
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;