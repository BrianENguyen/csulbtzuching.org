<template>
  <div class="home-jumbotron">
    <img
      src="https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1636913492/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_sewcrm.jpg"
      alt=""
      class="jumbotron__image"
    />
    <div class="home-jumbotron__container">
      <h1 class="home-jumbotron__title">CSULB Tzu Ching</h1>
      <p class="home-jumbotron__description">
        "With open arms and helping hands, our volunteers are here to serve you"
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-jumbotron {
  height: 100vh;
  position: relative;
  text-align: center;
}
.home-jumbotron__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
}
.home-jumbotron__title,
.home-jumbotron__description {
  color: white;
}

.home-jumbotron__description {
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
  .home-jumbotron__title {
    font-size: 15vw;
  }
}
@media (min-width: 576px) {
  .home-jumbotron__title {
    font-size: 10vw;
  }
}

@media (min-width: 992px) {
  .home-jumbotron__title {
    font-size: 5rem;
  }
}
</style>
