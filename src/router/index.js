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
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/team',
    name: 'TeamView',
    component: TeamView,
  },
  {
    path: '/events',
    name: 'EventsView',
    component: EventsView,
  },
  {
    path: '/photos',
    name: 'PhotosView',
    component: PhotosView,
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
