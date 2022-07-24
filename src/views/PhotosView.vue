<template>
  <div class="photos">
    <Jumbotron :jumboData="jumboData" />
    <CardWrapper>
      <p style="font-size: 1.2rem">
        Below are our photos from our recent events.
        <a href="https://flickr.com/people/135720189@N02/" target="_blank"
          >Click here</a
        >
        to view photos from previous years!
      </p>
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
  'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1915/v1648148277/CSULB_TC_Website/Jumbotron/BEN_tc-keychain.webp';
const jumboTitle = 'Photos';

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
