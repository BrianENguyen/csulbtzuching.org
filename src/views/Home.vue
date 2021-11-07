<template>
  <div>
    <Carousel />
    <Introduction />
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
import Introduction from '../components/Introduction.vue';

export default {
  name: 'Home',

  components: {
    Carousel,
    Introduction,
  },
};
Carousel;
</script>
