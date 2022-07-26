<template>
  <div>
    <Jumbotron :jumboData="jumboData" />
    <CardWrapper>
      <AnimateFadeIn>
        <Introduction />
      </AnimateFadeIn>
      <hr />
      <AnimateFadeIn>
        <UpcomingEvents />
      </AnimateFadeIn>
      <hr />
      <AnimateFadeIn>
        <RecentPhotos />
      </AnimateFadeIn>
      <AnimateFadeIn>
        <Quote />
      </AnimateFadeIn>
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
import AnimateFadeIn from '../components/Animations/AnimateFadeIn';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70,c_scale,w_1200/v1648148269/CSULB_TC_Website/Jumbotron/social-day-group.webp';
const jumboImageMobile =
  'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70,c_scale,w_600/v1648148269/CSULB_TC_Website/Jumbotron/social-day-group.webp';
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
    AnimateFadeIn,
  },
  data: () => ({
    jumboData: {
      src: jumboImage,
      srcMobile: jumboImageMobile,
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
