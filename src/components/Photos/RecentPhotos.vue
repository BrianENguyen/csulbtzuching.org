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
      'https://res.cloudinary.com/buraiyen/image/upload/v1637183817/CSULB_TC_Website/6F3E6219-7561-4D01-AA4A-B13A735CCE80_kjncp4.jpg',
      'https://res.cloudinary.com/buraiyen/image/upload/v1637183822/CSULB_TC_Website/IMG_9996_bdgkjf.jpg',
      'https://res.cloudinary.com/buraiyen/image/upload/v1637183820/CSULB_TC_Website/IMG_0040_txeaj1.jpg',
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
