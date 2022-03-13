<template>
  <v-card elevation="3" data-aos="fade-up" data-aos-duration="1000">
    <v-card-title>
      <!-- Event name -->
      <h1 class="upcoming_event_name">
        {{ event.name }}
      </h1>
    </v-card-title>
    <v-card-subtitle>
      <!-- Event date and time. If both aren't present, then 
          display "Date and time TBA" -->
      <h4 class="upcoming_event_datetime" v-if="event.date && event.time">
        {{ event.date.toLocaleString('default', { weekday: 'short' }) }},
        {{ event.date.toLocaleDateString() }} @ {{ event.time }}
      </h4>
      <h4 class="upcoming_event_datetime" v-else>Date and time TBA</h4>

      <!-- Event location. If no location provided, then render "Location TBA" -->
      <h4 v-if="event.location" class="upcoming_event_location">
        {{ event.location }}
      </h4>
      <h4 v-else class="upcoming_event_location">Location TBA</h4>
    </v-card-subtitle>
    <v-card-text>
      <p class="upcoming_event_description">
        {{ event.description }}
      </p>
    </v-card-text>

    <!-- Event link. If event has ended, then button will be disabled -->
    <v-card-actions>
      <v-btn
        v-if="event.link"
        class="upcoming_event_btn"
        color="blue"
        text
        :href="event.link"
        target="_blank"
        >Sign Up</v-btn
      >
      <v-btn v-else color="blue" text target="_blank" disabled
        >Sign Up Link Coming soon</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>

<style>
.upcoming_event_name {
  font-size: 1.5rem;
  color: #34be82;
  word-break: break-word;
}
.upcoming_event_datetime {
  font-size: 1rem;
}
.upcoming_event_location {
  font-size: 0.9rem;
}
.upcoming_event_description {
  font-weight: 300;
}
.upcoming_event_btn:hover {
  text-decoration: none;
}
</style>
