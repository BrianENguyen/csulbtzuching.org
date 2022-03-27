<template>
  <div class="jumbotron_">
    <img
      :src="jumboData.src"
      :lazy-src="jumboData.src"
      alt=""
      class="jumbotron__image"
    />
    <div class="jumbotron__container">
      <h1 class="jumbotron__title">{{ jumboData.title }}</h1>
      <p v-if="jumboData.description" class="jumbotron__description">
        {{ jumboData.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jumboData: Object,
  },
};
</script>

<style>
.jumbotron_ {
  height: 90vh;
  position: relative;
  text-align: center;
  background-color: black;
}
.jumbotron__container {
  position: absolute;
  top: 50%;
  left: 50%;
}
.jumbotron__title,
.jumbotron__description {
  color: white;
}

.jumbotron__image {
  object-fit: cover;
  width: 100%;
  position: relative;
  height: 90vh;
  z-index: 0;
}

@media (min-width: 0px) {
  .jumbotron__title {
    font-size: 7vw;
  }

  .jumbotron__description {
    font-size: 1.2rem;
  }

  .jumbotron_,
  .jumbotron__image {
    height: 40vh;
  }

  .jumbotron__container {
    transform: translate(-50%, -50%);
    width: 90%;
  }
}
@media (min-width: 576px) {
  .jumbotron__title {
    font-size: 5vw;
  }

  .jumbotron__description {
    font-size: 1.2rem;
  }

  .jumbotron_,
  .jumbotron__image {
    height: 60vh;
  }
}

@media (min-width: 992px) {
  .jumbotron__title {
    font-size: 5rem;
  }
  .jumbotron_,
  .jumbotron__image {
    height: 90vh;
  }
  .jumbotron__description {
    font-size: 1.6rem;
  }
}
</style>
