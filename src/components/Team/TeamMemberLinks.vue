<template>
  <!-- FIXME: find a better way to optimize this -->
  <div>
    <a v-if="links.email" :href="links.email" target="_blank"
      ><img
        src="../../assets/svg/envelope-solid.svg"
        class="mx-2 member_card_icon"
        alt="Mail button"
    /></a>
    <a v-if="links.site" :href="links.site" target="_blank">
      <img
        src="../../assets/svg/laptop-solid.svg"
        class="mx-2 member_card_icon"
        alt="Personal website button"
    /></a>
    <a v-if="links.linkedin" :href="links.linkedin" target="_blank">
      <img
        src="../../assets/svg/linkedin-brands.svg"
        class="mx-2 member_card_icon"
        alt="LinkedIn button"
      />
    </a>
    <a v-if="links.facebook" :href="links.facebook" target="_blank">
      <img
        src="../../assets/svg/facebook-brands.svg"
        class="mx-2 member_card_icon"
        alt="Facebook button"
    /></a>
    <a v-if="links.instagram" :href="links.instagram" target="_blank">
      <img
        src="../../assets/svg/instagram-brands.svg"
        class="mx-2 member_card_icon"
        alt="Instagram button"
    /></a>
    <a v-if="links.art" :href="links.art" target="_blank">
      <img
        src="../../assets/svg/palette-solid.svg"
        class="mx-2 member_card_icon"
        alt="Art button"
    /></a>
    <a v-if="links.food" :href="links.food" target="_blank">
      <img
        src="../../assets/svg/ice-cream-solid.svg"
        class="mx-2 member_card_icon"
        alt="Food button"
    /></a>
    <a v-if="links.tiktok" :href="links.tiktok" target="_blank">
      <img
        src="../../assets/svg/ice-cream-solid.svg"
        class="mx-2 member_card_icon"
        alt="TikTok button"
    /></a>
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
