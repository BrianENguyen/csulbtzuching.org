<template>
  <v-card max-width="500" elevation="5">
    <v-img height="200px" :src="event.img" />
    <v-card-title class="event_name">{{ event.name }}</v-card-title>
    <v-card-subtitle>
      <h4 class="event_datetime">{{ event.date }} @ {{ event.time }}</h4>
      <p>{{ event.location }}</p>
    </v-card-subtitle>
    <v-card-text class="event_description">{{ event.description }}</v-card-text>
    <v-card-actions>
      <v-btn v-if="event.link == 'TBA'" class="btn_disabled" text disabled
        >Sign Up Link Coming Soon</v-btn
      >
      <a v-else-if="event.link" :href="event.link" class="signup_link">
        <v-btn color="blue" text>Sign Up</v-btn>
      </a>
      <v-btn v-else class="btn_disabled" text disabled>Event Ended</v-btn>
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

<style scoped>
.signup_link {
  text-decoration: none;
}
.event_name {
  color: #34be82;
  font-size: 1.75rem;
}
.event_datetime {
  font-size: 1.25rem;
}
.event_description {
  font-weight: 300;
  color: black;
  margin-top: -10px;
}
.btn_disabled:hover {
  cursor: default;
  text-decoration: none;
}
</style>
