<template>
  <div class="photos">
    <Jumbotron :jumboData="jumboData" />
    <CardWrapper>
      <div v-for="(event, i) in events" :key="i">
        <PhotoGallery :event="event" />
      </div>
    </CardWrapper>
  </div>
</template>

<script>
import Jumbotron from '../components/UI/Jumbotron';
import PhotoGallery from '../components/Photos/PhotoGallery.vue';
import CardWrapper from '../components/UI/CardWrapper';
import PhotoData from '../components/Helpers/PhotoData.js';

const jumboImage =
  'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70,c_scale,w_1915/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg';
const jumboTitle = 'Photos';
const jumboDescription = 'Photos from our recent events!';

export default {
  components: {
    PhotoGallery,
    CardWrapper,
    Jumbotron,
  },
  data: () => ({
    events: PhotoData,
    jumboData: {
      src: jumboImage,
      title: jumboTitle,
      description: jumboDescription,
    },
  }),
};
</script>

<style>
#photos_subheader {
  text-align: center;
  font-size: 2rem;
  color: #3babd4;
}
</style>
