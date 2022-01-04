<template>
  <div>
    <Jumbotron />
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
import Jumbotron from '../components/Home/Jumbotron';
import Introduction from '../components/Introduction';
import UpcomingEvents from '../components/Events/Upcoming/UpcomingEvents';
import Quote from '../components/Quote';
import RecentPhotos from '../components/Photos/RecentPhotos';
import CardWrapper from '../components/UI/CardWrapper.vue';

export default {
  name: 'Home',

  components: {
    Jumbotron,
    Introduction,
    UpcomingEvents,
    Quote,
    RecentPhotos,
    CardWrapper,
  },
};
</script>

<style scoped>
.home_card {
  margin: 1%;
}
</style>
