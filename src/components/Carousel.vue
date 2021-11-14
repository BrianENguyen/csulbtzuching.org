<template>
  <v-carousel cycle height="600">
    <v-carousel-item
      v-for="(section, i) in contents"
      :key="i"
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
        header: 'Welcome to CSULB Tzu Ching!',
        description: '',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/v1636914034/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_j7ylph.jpg',
      },
      {
        header: 'Events',
        description: 'View our current / most recent events!',
        button: 'View',
        link: '/events',
        src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_2407/v1636247406/CSULB_TC_Website/DSC_0400_nmkrtt.jpg',
      },
      {
        src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1242/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg',
      },
    ],
  }),
};
</script>

<style scoped>
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
