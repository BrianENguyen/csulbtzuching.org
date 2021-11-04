import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Events from '../views/Events.vue';
import Photos from '../views/Photos.vue';
import Officers from '../views/Officers.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/events',
    name: 'events',
    component: Events,
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos,
  },
  {
    path: '/officers',
    name: 'officers',
    component: Officers,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
