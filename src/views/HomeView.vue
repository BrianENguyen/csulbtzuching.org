<template>
  <div>
    <Jumbotron :jumboData="jumboData" />
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
import Introduction from '../components/Home/Introduction';
import UpcomingEvents from '../components/Events/Upcoming/UpcomingEvents';
import Quote from '../components/Home/Quote';
import RecentPhotos from '../components/Photos/RecentPhotos';
import CardWrapper from '../components/UI/CardWrapper.vue';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70,c_scale,w_1915/v1636913492/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_sewcrm.jpg';
const jumboTitle = 'CSULB Tzu Ching';
const jumboDescription =
  '"With open arms and helping hands, our volunteers are here to serve you"';

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
    jumboData: {
      src: jumboImage,
      title: jumboTitle,
      description: jumboDescription,
    },
  }),
};
</script>

<style scoped>
.home_card {
  margin: 1%;
}
</style>
