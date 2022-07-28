<template>
  <!-- Recent photos component used to display on the home page -->
  <div>
    <PageHeader>Recent Photos</PageHeader>
    <v-row class="fill-height">
      <v-col
        v-for="(photo, i) in photos"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <PhotoCard :photo="photo" /> </v-col
    ></v-row>
    <center>
      <router-link to="/photos" class="photos_btn_hover">
        <v-btn x-large class="photos_btn">View More Photos</v-btn>
      </router-link>
    </center>
  </div>
</template>

<script>
import PhotoCard from './PhotoCard';
import PageHeader from '../UI/Header/PageHeader';

export default {
  name: 'RecentPhotos',
  components: {
    PhotoCard,
    PageHeader,
  },
  data: () => ({
    photos: [
      'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1648069430/CSULB_TC_Website/Gallery/2021-11-13_MedicalOutreach/outreach1_k1nzkx.webp',
      'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1648233698/CSULB_TC_Website/Gallery/distribution.webp',
    ],
  }),
};
</script>

<style>
.photos_btn {
  margin: 4rem 0px;
}
.photos_btn_hover:hover {
  text-decoration: none;
}
</style>
