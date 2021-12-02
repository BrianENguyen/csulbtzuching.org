import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import TeamView from '../views/TeamView.vue';
import EventsView from '../views/EventsView.vue';
import PhotosView from '../views/PhotosView.vue';
import DonateView from '../views/DonateView.vue';
import ErrorView from '../views/ErrorView.vue';

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
    path: '/donate',
    name: 'Donate',
    component: DonateView,
    meta: { title: 'Donate| CSULB TC' },
  },
  {
    path: '*',
    component: ErrorView,
    meta: { title: '404' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

export default router;
