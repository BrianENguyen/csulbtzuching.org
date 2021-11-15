import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import TeamView from '../views/TeamView.vue';
import EventsView from '../views/EventsView.vue';
import PhotosView from '../views/PhotosView.vue';
import ContactView from '../views/ContactView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'CSULB Tzu Ching' },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About | CSULB TC' },
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView,
    meta: { title: 'Team | CSULB TC' },
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsView,
    meta: { title: 'Events | CSULB TC' },
  },
  {
    path: '/photos',
    name: 'Photos',
    component: PhotosView,
    meta: { title: 'Photos | CSULB TC' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact | CSULB TC' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
