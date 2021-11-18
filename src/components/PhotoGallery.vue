<template>
  <div class="gallery_section">
    <h2>{{ event.name }}, {{ event.date }}</h2>
    <v-row>
      <v-col v-for="photo in event.photos" :key="photo" cols="6" lg="4">
        <PhotoCard :photo="photo" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PhotoCard from './PhotoCard.vue';
export default {
  components: {
    PhotoCard,
  },
  props: {
    event: Object,
  },
};
</script>

<style>
.gallery_section {
  margin: 3rem 0px;
}
</style>
