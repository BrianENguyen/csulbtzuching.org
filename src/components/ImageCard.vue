<template>
  <v-hover v-slot="{ hover }">
    <v-img
      src="https://res.cloudinary.com/buraiyen/image/upload/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg"
      aspect-ratio="1"
      width="300px"
      :class="{ test: hover }"
    >
    </v-img>
  </v-hover>
</template>

<script>
export default {};
</script>

<style>
.test {
  transition: opacity 0.4s ease-in-out;
}
.test:not(.onhover) {
  opacity: 0.6;
}
</style>
