<template>
  <v-container class="carousel_content">
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
.carousel_content {
  margin-top: 10%;
  text-align: center;
}
.carousel_header {
  color: #000000;
  font-size: 4rem;
  -webkit-text-stroke-width: 3px;
  -webkit-text-fill-color: #ffffff;
}
.carousel_description {
  font-size: 2rem;
  color: #000000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-fill-color: #ffffff;
}
.carousel_btn:hover {
  text-decoration: none;
}
@media (min-width: 0px) {
  .carousel_content {
    margin-top: 25%;
    text-align: center;
  }
  .carousel_header {
    font-size: 2.5rem;
    -webkit-text-stroke-width: 1px;
  }
  .carousel_description {
    font-size: 2rem;
    -webkit-text-stroke-width: 0.5px;
  }
}

@media (min-width: 576px) {
  .carousel_content {
    margin-top: 20%;
    text-align: center;
  }
  .carousel_header {
    font-size: 3rem;
    -webkit-text-stroke-width: 2px;
  }
  .carousel_description {
    font-size: 2rem;
    -webkit-text-stroke-width: 1px;
  }
}

@media (min-width: 768px) {
  .carousel_content {
    margin-top: 13%;
    text-align: center;
  }
  .carousel_header {
    font-size: 4rem;
    -webkit-text-stroke-width: 3px;
  }
  .carousel_description {
    font-size: 3rem;
    -webkit-text-stroke-width: 2px;
  }
}
</style>
