<template>
  <v-card outlined elevation="3" class="card_wrapper">
    <v-container class="card_wrapper_content">
      <slot></slot>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.card_wrapper {
  margin: -2% 5%;
}
.card_wrapper_content {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
