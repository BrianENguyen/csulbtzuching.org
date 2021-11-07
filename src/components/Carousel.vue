<template>
  <v-carousel cycle>
    <v-carousel-item
      v-for="section in contents"
      :key="section.id"
      :src="section.src"
    >
      <v-container class="carousel_item">
        <h1 class="carousel_header">{{ section.header }}</h1>
        <p class="carousel_description">{{ section.description }}</p>
        <div v-if="section.link">
          <router-link :to="section.link" class="carousel_btn"
            ><v-btn>{{ section.button }}</v-btn>
          </router-link>
        </div>
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
        button: 'View',
        link: '/events',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_2407/v1636247406/CSULB_TC_Website/DSC_0400_nmkrtt.jpg',
      },
    ],
  }),
};
</script>

<style scoped>
.carousel_item {
  padding-top: 10%;
  /* filter: brightness(50%); */
}
.carousel_header {
  color: #ffffff;
  font-size: 3.5rem;
}
.carousel_description {
  color: #ffffff;
}
.carousel_btn {
  text-decoration: none;
}
</style>
