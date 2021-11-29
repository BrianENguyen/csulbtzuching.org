<template>
  <v-timeline-item small>
    <h3 class="event_name">{{ event.name }}</h3>
    <h4 class="event_datetime">{{ event.date }} @ {{ event.time }}</h4>
    <p>{{ event.location }}</p>
    <p class="event_description">{{ event.description }}</p>
    <a :href="event.link" class="signup_link"><v-btn small> Sign Up</v-btn></a>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>

<style scoped>
.signup_link {
  text-decoration: none;
}
.event_name {
  color: #34be82;
  font-size: 1.5rem;
}
.event_datetime {
  font-size: 1.25rem;
}
.event_description {
  font-weight: 300;
}
</style>
