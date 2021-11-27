<template>
  <v-img :src="src" aspect-ratio="1" class="member_profile_picture" />
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style>
.member_profile_picture {
  border-radius: 15%;
  width: 70px;
  margin-bottom: 10px;
}
</style>
