<template>
  <v-row class="fill-height">
    <v-col v-for="(photo, i) in photos" :key="i" cols="12" md="6" lg="4">
      <PhotoCard /> </v-col
  ></v-row>
</template>

<script>
import PhotoCard from './PhotoCard';

export default {
  name: 'RecentPhotos',
  components: {
    PhotoCard,
  },
  data: () => ({
    photos: [
      'https://res.cloudinary.com/buraiyen/image/upload/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg',
      'https://res.cloudinary.com/buraiyen/image/upload/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg',
      'https://res.cloudinary.com/buraiyen/image/upload/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg',
      'https://res.cloudinary.com/buraiyen/image/upload/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg',
    ],
  }),
};
</script>

<style></style>
