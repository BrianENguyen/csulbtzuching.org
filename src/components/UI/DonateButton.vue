<template>
  <a class="donation_button" :href="info.link" target="_blank">
    <v-btn rounded :color="info.color" dark large>
      <v-img :src="info.logo" width="30px"></v-img>
      Donate
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
