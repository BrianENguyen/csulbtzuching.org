<template>
  <div>
    <Carousel />
    <Introduction />
    <RecentEvents />
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
import Introduction from '../components/Introduction.vue';
import RecentEvents from '../components/RecentEvents.vue';

export default {
  name: 'Home',

  components: {
    Carousel,
    Introduction,
    RecentEvents,
  },
};
Carousel;
</script>
