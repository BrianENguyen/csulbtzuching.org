<template>
  <div>
    <Carousel />
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Carousel from '../components/Carousel';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    Carousel,
  },
};
Carousel;
</script>
