<template>
  <div>
    <a v-if="links.email" :href="links.email" target="_blank"
      ><i class="fas fa-envelope fa-2x mr-2 member_card_icon"></i
    ></a>
    <a v-if="links.site" :href="links.site" target="_blank">
      <i class="fas fa-link fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="links.linkedin" :href="links.linkedin" target="_blank">
      <i class="fab fa-linkedin fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="links.facebook" :href="links.facebook" target="_blank">
      <i class="fab fa-facebook fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="links.instagram" :href="links.instagram" target="_blank">
      <i class="fab fa-instagram fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="links.art" :href="links.art" target="_blank">
      <i class="fas fa-palette fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="links.food" :href="links.food" target="_blank">
      <i class="fas fa-ice-cream fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="links.tiktok" :href="links.tiktok" target="_blank">
      <i class="fab fa-tiktok fa-2x mx-2 member_card_icon"></i
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    links: Object,
  },
};
</script>

<style>
.member_card_icon {
  color: rgb(116, 116, 116);
  transition: 0.5s;
}
.member_card_icon:hover {
  color: rgb(24, 24, 24);
  transition: 0.5s;
}
</style>
