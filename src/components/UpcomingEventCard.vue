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

<style></style>
