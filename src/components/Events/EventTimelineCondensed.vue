<template>
  <div>
    <h2 class="month">{{ month }}</h2>
    <v-timeline class="timeline_spacing" dense>
      <div v-for="(event, i) in events" :key="i">
        <EventTimelineItemCondensed :event="event" />
      </div>
    </v-timeline>
  </div>
</template>

<script>
import EventTimelineItemCondensed from './EventTimelineItemCondensed.vue';

export default {
  components: {
    EventTimelineItemCondensed,
  },
  props: {
    month: String,
    events: Array,
  },
};
</script>

<style>
.month {
  color: #3babd4;
  text-align: center;
}
@media (min-width: 768px) {
  .timeline_spacing {
    margin-left: 20%;
  }
}
</style>
