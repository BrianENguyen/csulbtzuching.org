<template>
  <v-container>
    <h1>Photos</h1>
    <div v-for="(event, i) in events" :key="i">
      <PhotoGallery :event="event" />
    </div>
  </v-container>
</template>

<script>
import PhotoGallery from '../components/PhotoGallery.vue';
export default {
  components: {
    PhotoGallery,
  },
  data: () => ({
    events: [
      {
        name: 'Medical Outreach',
        date: '11/13/21',
        photos: [
          'https://res.cloudinary.com/buraiyen/image/upload/v1637183817/CSULB_TC_Website/6F3E6219-7561-4D01-AA4A-B13A735CCE80_kjncp4.jpg',
        ],
      },
    ],
  }),
};
</script>

<style></style>
