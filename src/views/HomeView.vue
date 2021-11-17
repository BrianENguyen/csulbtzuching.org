<template>
  <div>
    <Carousel />
    <v-card class="home_card" outlined elevation="15">
      <v-container>
        <Introduction />
        <UpcomingEvents />
        <Quote />
        <ImageCard />
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Carousel from '../components/Carousel/Carousel.vue';
import Introduction from '../components/Introduction';
import UpcomingEvents from '../components/UpcomingEvents';
import Quote from '../components/Quote';
import ImageCard from '../components/ImageCard.vue';

export default {
  name: 'Home',

  components: {
    Carousel,
    Introduction,
    UpcomingEvents,
    Quote,
    ImageCard,
  },
};
Carousel;
</script>

<style scoped>
.home_card {
  margin: 1%;
}
</style>
