<template>
  <v-container>
    <v-timeline :reverse="reverse" dense>
      <v-timeline-item>
        <EventCard />
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import EventCard from './EventCard.vue';
export default {
  components: {
    EventCard,
  },
};
</script>
