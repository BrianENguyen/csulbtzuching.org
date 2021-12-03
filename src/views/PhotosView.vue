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

export default {
  components: {
    PhotoGallery,
    CardWrapper,
    PageTitle,
    PageHeader,
  },
  data: () => ({
    events: [
      {
        name: 'Medical Outreach',
        date: '11/13/21',
        photos: [
          'https://res.cloudinary.com/buraiyen/image/upload/v1637183817/CSULB_TC_Website/6F3E6219-7561-4D01-AA4A-B13A735CCE80_kjncp4.jpg',
          'https://res.cloudinary.com/buraiyen/image/upload/v1637183822/CSULB_TC_Website/IMG_9996_bdgkjf.jpg',
          'https://res.cloudinary.com/buraiyen/image/upload/v1638232325/CSULB_TC_Website/outreach_totlvn.jpg',
        ],
      },
      {
        name: 'Fall Week of Welcome',
        date: '9/5/21',
        photos: [
          'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1151/v1637269283/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1548_pynqen.jpg',
          'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1084/v1637269278/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1632_sdahq2.jpg',
          'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1148/v1637269268/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1689_fjaew9.jpg',
          'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_892/v1637269276/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1533_uplruz.jpg',
          'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1020/v1637269282/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1661_klychz.jpg',
        ],
      },
    ],
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
