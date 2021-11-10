<template>
  <v-timeline-item small>
    <h3 class="event_name">{{ event.name }}</h3>
    <h4>{{ event.date }} | {{ event.time }}</h4>
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
}
.event_datetime {
  color: #3babd4;
}

.event_description {
  font-weight: 300;
}
</style>
