<template>
  <v-card
    ><h3 class="recent_event_name">{{ event.name }}</h3>
    <h4 class="recent_event_date">{{ event.date }}</h4>
    <p>{{ event.description }}</p>
    <v-btn>Sign Up</v-btn>
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
.recent_events_month {
  color: #3babd4;
}

.recent_event_name {
  color: #34be82;
}
.recent_event_date {
  color: #34be82;
}
</style>
