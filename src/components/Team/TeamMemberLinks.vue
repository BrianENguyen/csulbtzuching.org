<template>
  <div>
    <a v-if="member.email" :href="member.email" target="_blank"
      ><i class="fas fa-envelope fa-2x mr-2 member_card_icon"></i
    ></a>
    <a v-if="member.facebook" :href="member.facebook" target="_blank">
      <i class="fab fa-facebook fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
      <i class="fab fa-linkedin fa-2x mx-2 member_card_icon"></i
    ></a>
    <a v-if="member.site" :href="member.site" target="_blank">
      <i class="fas fa-link fa-2x mx-2 member_card_icon"></i
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    member: Object,
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
