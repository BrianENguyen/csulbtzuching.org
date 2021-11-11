<template>
  <v-timeline-item>
    <EventCard :event="event" />
  </v-timeline-item>
</template>

<script>
import EventCard from './EventCard';
export default {
  props: {
    event: Object,
  },
  components: {
    EventCard,
  },
};
</script>
