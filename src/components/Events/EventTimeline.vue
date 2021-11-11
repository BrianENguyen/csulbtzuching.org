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
  text-align: left;
  font-size: 2.5rem;
  color: #3babd4;
}

@media (min-width: 768px) {
  .timeline_spacing {
    margin-left: 50%;
  }
  .month {
    margin-left: 15%;
  }
}

@media (min-width: 576px) {
  .month {
    margin-left: 10%;
  }
  .timeline_spacing {
    margin-left: 15%;
  }
}
</style>
