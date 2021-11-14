<template>
  <v-carousel cycle height="600" interval="10000">
    <v-carousel-item
      v-for="(content, i) in contents"
      :key="i"
      :src="content.src"
    >
      <CarouselContent :content="content" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import CarouselContent from './CarouselContent.vue';
export default {
  name: 'Carousel',
  components: {
    CarouselContent,
  },
  data: () => ({
    contents: [
      {
        header: 'Welcome to CSULB Tzu Ching!',
        button: 'About Us',
        link: '/about',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/v1636914034/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_j7ylph.jpg',
      },
      {
        header: 'Events',
        description: 'View our current / most recent events!',
        button: 'View',
        link: '/events',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_2407/v1636247406/CSULB_TC_Website/DSC_0400_nmkrtt.jpg',
      },
      {
        header: 'Photos',
        description: 'Check out our photos from our events!',
        button: 'View',
        link: '/photos',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/v1636245907/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_pboqz1.jpg',
      },
      {
        header: 'Board Members',
        description: 'Get to know our 2021-2022 officers and advisors!',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1531/v1636919257/CSULB_TC_Website/BEN_1689_01_hobk1j.jpg',
        button: 'View',
        link: '/team',
      },
    ],
  }),
};
</script>
