<template>
  <a class="donation_button" :href="info.link" target="_blank">
    <v-btn rounded :color="info.color" dark large>
      {{ info.text }}
    </v-btn>
  </a>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.donation_button:hover {
  text-decoration: none;
}
</style>
