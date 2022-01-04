<template>
  <div class="home-jumbotron">
    <img
      src="https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1636913492/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_sewcrm.jpg"
      alt=""
      class="jumbotron__image"
    />
    <div class="home-jumbotron__text"></div>
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
  color: white;
}
.home-jumbotron__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.jumbotron__image {
  object-fit: cover;
  width: 100%;
  position: relative;
  height: 110vh;
  z-index: 0;
}
</style>
