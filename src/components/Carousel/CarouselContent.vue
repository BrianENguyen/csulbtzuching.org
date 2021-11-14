<template>
  <v-container class="carousel_item">
    <h1 class="carousel_header">{{ section.header }}</h1>
    <p class="carousel_description">{{ section.description }}</p>
    <div v-if="section.link">
      <router-link :to="section.link" class="carousel_btn"
        ><v-btn>{{ section.button }}</v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
