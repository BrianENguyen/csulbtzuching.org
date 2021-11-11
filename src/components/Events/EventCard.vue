<template>
  <v-card max-width="500" elevation="5">
    <v-img height="150px" :src="event.img"></v-img>
    <v-card-title class="event_name">{{ event.name }}</v-card-title>
    <v-card-subtitle>
      <h4>{{ event.date }} @ {{ event.time }}</h4>
      {{ event.location }}
    </v-card-subtitle>
    <v-card-text>{{ event.description }}</v-card-text>
    <v-card-actions>
      <a :href="event.link" class="signup_link">
        <v-btn color="blue" text>Sign Up</v-btn>
      </a>
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
}
.event_description {
  font-weight: 300;
  color: black;
}
</style>
