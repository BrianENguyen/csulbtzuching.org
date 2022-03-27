<template>
  <v-timeline-item small>
    <!-- Event Name -->
    <h3 class="event_name">{{ event.name }}</h3>

    <!-- Event date and time. If both aren't present, then 
          display "Date and time TBA" -->
    <h4 v-if="event.date && event.time" class="event_datetime">
      {{ event.date.toLocaleString('default', { weekday: 'short' }) }},
      {{ event.date.toLocaleDateString() }} @ {{ event.time }}
    </h4>
    <h4 v-else>Date and time TBA</h4>

    <!-- Event location. If no location provided, then render "Location TBA" -->
    <p v-if="event.location" class="event_location">{{ event.location }}</p>
    <p v-else class="event_location">Location TBA</p>

    <!-- Event description -->
    <p class="event_description">{{ event.description }}</p>

    <a
      v-if="event.link && Date.now() < event.date"
      :href="event.link"
      target="_blank"
      class="signup_link"
    >
      <v-btn color="primary">Sign Up</v-btn>
    </a>
    <!-- Event link. If there is no link or event has ended, then button will be disabled -->
    <v-btn v-else-if="Date.now() > event.date" class="btn_disabled" disabled
      >Event Ended</v-btn
    >
    <v-btn v-else-if="!event.link" class="btn_disabled" text disabled
      >Link Coming Soon</v-btn
    >
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
  width: 50%;
}
.btn_disabled:hover {
  cursor: default;
  text-decoration: none;
}

@media (max-width: 750px) {
  .event_description {
    width: 100%;
  }
}
</style>
