<template>
  <div>
    <Carousel />
    <v-container>
      <Introduction />
      <RecentEvents />
      <Quote />
    </v-container>
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
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
