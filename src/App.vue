<template>
  <v-app>
    <Navbar />
    <v-main>
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
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'CSULB Tzu Ching';
      },
    },
  },
};
</script>
