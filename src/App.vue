<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
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
