<template>
  <v-app>
    <Navbar />
    <v-main>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOutUp"
      >
        <router-view />
      </transition>
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
