<template>
  <div>
    <Carousel />
    <CardWrapper>
      <Introduction />
      <hr />
      <UpcomingEvents />
      <hr />
      <RecentPhotos />
      <Quote />
    </CardWrapper>
  </div>
</template>

<script>
import Carousel from '../components/Carousel/Carousel.vue';
import Introduction from '../components/Introduction';
import UpcomingEvents from '../components/Events/Upcoming/UpcomingEvents';
import Quote from '../components/Quote';
import RecentPhotos from '../components/Photos/RecentPhotos';
import CardWrapper from '../components/UI/CardWrapper.vue';

export default {
  name: 'Home',

  components: {
    Carousel,
    Introduction,
    UpcomingEvents,
    Quote,
    RecentPhotos,
    CardWrapper,
  },
};
Carousel;
</script>

<style scoped>
.home_card {
  margin: 1%;
}
</style>
