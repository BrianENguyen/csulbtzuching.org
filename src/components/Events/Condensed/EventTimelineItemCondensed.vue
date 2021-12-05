<template>
  <v-timeline-item small>
    <h3 class="event_name">{{ event.name }}</h3>
    <h4 v-if="event.date && event.time" class="event_datetime">
      {{ event.date }} @ {{ event.time }}
    </h4>
    <h4 v-else>Date and time TBA</h4>
    <p class="event_location">{{ event.location }}</p>
    <p class="event_description">{{ event.description }}</p>
    <v-btn v-if="event.link == 'TBA'" class="btn_disabled" text disabled
      >Link Coming Soon</v-btn
    >
    <a v-else-if="event.link" :href="event.link" class="signup_link">
      <v-btn color="primary">Sign Up</v-btn>
    </a>
    <v-btn v-else class="btn_disabled" disabled>Event Ended</v-btn>
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
.event_location {
  font-weight: 700;
}
.event_description {
  font-weight: 300;
}
.btn_disabled:hover {
  cursor: default;
  text-decoration: none;
}
</style>
