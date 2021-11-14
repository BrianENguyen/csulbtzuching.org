<template>
  <div>
    <Carousel />
    <v-card class="home_card" outlined elevation="15">
      <v-container>
        <Introduction />
        <RecentEvents />
        <Quote />
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Carousel from '../components/Carousel/Carousel.vue';
import Introduction from '../components/Introduction';
import RecentEvents from '../components/RecentEvents';
import Quote from '../components/Quote';

export default {
  name: 'Home',

  components: {
    Carousel,
    Introduction,
    RecentEvents,
    Quote,
  },
};
Carousel;
</script>

<style scoped>
.home_card {
  margin: 1%;
}
</style>
