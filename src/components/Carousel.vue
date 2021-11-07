<template>
  <v-carousel cycle v-model="model">
    <v-carousel-item
      v-for="section in contents"
      :key="section.id"
      :src="section.src"
    >
      <v-container class="carousel-item">
        <h1 class="header">{{ section.header }}</h1>
        <p class="description">{{ section.description }}</p>
        <v-btn v-show="section.button">{{ section.button }}</v-btn>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data: () => ({
    contents: [
      {
        id: 1,
        header: 'Welcome to CSULB Tzu Ching!',
        description: 'Enjoy your stay or whatever',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/v1636245907/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_pboqz1.jpg',
      },
      {
        id: 2,
        header: 'Events',
        description: 'View our current / most recent events!',
        button: 'Click',
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
    ],
  }),
};
</script>

<style scoped>
.carousel-item {
  padding-top: 20%;
  /* filter: brightness(50%); */
}
.header,
.description {
  color: #ffffff;
}
</style>
