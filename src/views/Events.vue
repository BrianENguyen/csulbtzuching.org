<template>
  <div>
    <v-container
      ><h1 id="events_header">Events</h1>
      <h2 class="month">November 2021</h2>
      <EventTimeline
    /></v-container>
  </div>
</template>

<script>
import EventTimeline from '../components/Events/EventTimeline';

export default {
  components: {
    EventTimeline,
  },
};
</script>

<style scoped>
#events_header {
  text-align: center;
  font-size: 3rem;
  color: #2f86a6;
}
.month {
  text-align: center;
  font-size: 2.5rem;
  color: #3babd4;
}
</style>
