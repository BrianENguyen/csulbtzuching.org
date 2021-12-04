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
  color: #ffffff;
  font-size: 4rem;
  font-weight: 500;
}
.carousel_description {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 300;
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
  }
  .carousel_description {
    font-size: 2rem;
  }
}

@media (min-width: 576px) {
  .carousel_content {
    margin-top: 20%;
    text-align: center;
  }
  .carousel_header {
    font-size: 3rem;
  }
  .carousel_description {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  .carousel_content {
    margin-top: 10%;
    text-align: center;
  }
  .carousel_header {
    font-size: 4rem;
  }
  .carousel_description {
    font-size: 3rem;
  }
}
</style>
