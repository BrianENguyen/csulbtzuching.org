<template>
  <v-timeline-item>
    <v-row>
      <v-col cols="7">
        <EventCard :event="event" />
      </v-col>
      <v-col cols="5">
        <h2 class="text-center">{{ event.date }} @ {{ event.time }}</h2>
      </v-col>
    </v-row>
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
