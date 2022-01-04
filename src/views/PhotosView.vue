<template>
  <CardWrapper>
    <PageTitle>Photos</PageTitle>
    <PageHeader class="text-center">
      Get a glimpse at what we do in our organization!
    </PageHeader>
    <div v-for="(event, i) in events" :key="i">
      <PhotoGallery :event="event" />
    </div>
  </CardWrapper>
</template>

<script>
import PhotoGallery from '../components/Photos/PhotoGallery.vue';
import CardWrapper from '../components/UI/CardWrapper';
import PageTitle from '../components/UI/Header/PageTitle';
import PageHeader from '../components/UI/Header/PageHeader';
import PhotoData from '../components/Helpers/PhotoData.js';

export default {
  components: {
    PhotoGallery,
    CardWrapper,
    PageTitle,
    PageHeader,
  },
  data: () => ({
    events: PhotoData,
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
