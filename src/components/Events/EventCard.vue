<template>
  <v-card max-width="500">
    <v-img height="200px" :src="event.img"></v-img>
    <v-card-title>{{ event.name }}</v-card-title>
    <v-card-subtitle>
      {{ event.location }}
    </v-card-subtitle>
    <v-card-text>{{ event.description }}</v-card-text>
    <v-card-actions>
      <v-btn color="blue" text
        ><a :href="event.link" class="signup_link">Sign Up</a></v-btn
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

<style scoped>
.signup_link {
  text-decoration: none;
}
</style>
