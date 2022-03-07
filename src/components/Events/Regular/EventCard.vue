<template>
  <v-card max-width="400" elevation="5">
    <v-img
      v-if="event.img"
      height="200px"
      :src="event.img"
      :lazy-src="event.img"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title class="event_name">{{ event.name }}</v-card-title>
    <v-card-subtitle>
      <h4 v-if="event.date && event.time" class="event_datetime">
        {{ event.date }} @ {{ event.time }}
      </h4>
      <h4 v-else class="event_datetime">Date and time TBA</h4>
      <p class="event_location">{{ event.location }}</p>
    </v-card-subtitle>
    <v-card-text class="event_description">{{ event.description }}</v-card-text>
    <v-card-actions>
      <v-btn v-if="event.link == 'TBA'" class="btn_disabled" text disabled
        >Link Coming Soon</v-btn
      >
      <a
        v-else-if="event.link"
        :href="event.link"
        target="_blank"
        class="signup_link"
      >
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
  word-break: break-word;
}
.event_datetime {
  font-size: 1.25rem;
  font-weight: 500;
}
.event_description {
  font-weight: 300;
  color: black;
  margin-top: -10px;
}
.event_location {
  font-weight: 700;
}
.btn_disabled:hover {
  cursor: default;
  text-decoration: none;
}
</style>
