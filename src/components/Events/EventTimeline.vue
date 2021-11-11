<template>
  <div>
    <h2 class="month">{{ month }}</h2>
    <v-timeline class="timeline_spacing" dense>
      <div v-for="(event, i) in events" :key="i">
        <EventTimelineItem :event="event" />
      </div>
    </v-timeline>
  </div>
</template>

<script>
import EventTimelineItem from './EventTimelineItem.vue';

export default {
  components: {
    EventTimelineItem,
  },
  props: {
    month: String,
    events: Array,
  },
};
</script>

<style scoped>
.month {
  text-align: center;
  font-size: 2.5rem;
  color: #3babd4;
}

@media (min-width: 768px) {
  .timeline_spacing {
    margin-left: 20%;
  }
}
</style>
