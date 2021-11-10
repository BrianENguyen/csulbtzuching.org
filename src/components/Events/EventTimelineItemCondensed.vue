<template>
  <v-timeline-item small>
    <h3>{{ event.name }}</h3>
    <h4>{{ event.date }} | {{ event.time }}</h4>
    <h4>{{ event.location }}</h4>
    <p>{{ event.description }}</p>
    <a :href="event.link" class="signup_link"><v-btn> Sign Up</v-btn></a>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>
