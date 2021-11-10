<template>
  <v-timeline-item>
    <v-row>
      <v-col cols="7">
        <EventCard :event="event" />
      </v-col>
      <v-col cols="5">
        <h2 class="event_datetime">{{ event.date }} @ {{ event.time }}</h2>
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

<style scoped>
.event_datetime {
  text-align: center;
  color: #34be82;
}
</style>
