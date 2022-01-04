<template>
  <div class="jumbotron_">
    <img :src="jumboData.src" alt="" class="jumbotron__image" />
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
  height: 100vh;
  position: relative;
  text-align: center;
}
.jumbotron__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
}
.jumbotron__title,
.jumbotron__description {
  color: white;
}

.jumbotron__description {
  font-size: 1.6rem;
}
.jumbotron__image {
  object-fit: cover;
  width: 100%;
  position: relative;
  height: 110vh;
  z-index: 0;
}

@media (min-width: 0px) {
  .jumbotron__title {
    font-size: 15vw;
  }
}
@media (min-width: 576px) {
  .jumbotron__title {
    font-size: 10vw;
  }
}

@media (min-width: 992px) {
  .jumbotron__title {
    font-size: 5rem;
  }
}
</style>
