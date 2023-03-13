<template>
  <v-card outlined elevation="4" class="disclaimer">
    <h2>Important Information</h2>
    <p>
      This site is now in archived mode, meaning it will no longer receive any
      updates for the forseeable future.
    </p>
    <p>
      To stay up to date with our latest events, please contact
      <a href="mailto:tcca.csulb@gmail.com">tcca.csulb@gmail.com</a> to sign up
      for our mailing list if you aren't already
    </p>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.disclaimer {
  position: fixed;
  bottom: 0;
  left: 4;
  background: white;
  z-index: 1000;
  border-radius: 10px;
  border: 2px solid;
  max-width: 400px;
}
</style>
