<template>
  <v-container class="carousel_item">
    <h1 class="carousel_header">{{ content.header }}</h1>
    <p class="carousel_description">{{ content.description }}</p>
    <div v-if="content.link">
      <router-link :to="content.link" class="carousel_btn"
        ><v-btn>{{ content.button }}</v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    content: Object,
  },
};
</script>

<style>
.carousel_item {
  margin-top: 13%;
  text-align: center;
}
.carousel_header {
  color: #000000;
  font-size: 4rem;
  -webkit-text-stroke-width: 3px;
  -webkit-text-fill-color: #ffffff;
}
.carousel_description {
  color: #ffffff;
}
.carousel_btn {
  text-decoration: none;
}
</style>
