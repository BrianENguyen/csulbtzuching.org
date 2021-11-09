<template>
  <div>
    <v-container
      ><h1>Events</h1>
      <p>* Last updated 11/13/21</p>
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
