<template>
  <v-app>
    <Navbar />
    <v-main>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/team">Team</router-link> |
        <router-link to="/events">Events</router-link> |
        <router-link to="/photos">Photos</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/UI/Navbar';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
