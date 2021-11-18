<template>
  <div>
    <h2>{{ event.name }}</h2>
    <v-row>
      <v-col v-for="photo in event.photos" :key="photo" cols="12" md="6" lg="4">
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

<style></style>
