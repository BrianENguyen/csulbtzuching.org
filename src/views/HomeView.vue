<template>
  <div>
    <Jumbotron :jumboImageSrc="jumboImageSrc" />
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
import Jumbotron from '../components/UI/Jumbotron';
import Introduction from '../components/Introduction';
import UpcomingEvents from '../components/Events/Upcoming/UpcomingEvents';
import Quote from '../components/Quote';
import RecentPhotos from '../components/Photos/RecentPhotos';
import CardWrapper from '../components/UI/CardWrapper.vue';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1636913492/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_sewcrm.jpg';

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
  data: () => ({
    jumboImageSrc: jumboImage,
  }),
};
</script>

<style scoped>
.home_card {
  margin: 1%;
}
</style>
