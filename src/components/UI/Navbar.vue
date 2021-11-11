<template>
  <div id="nav">
    <b-navbar toggleable="md" type="light" variant="light" fixed="top">
      <NavbarBrand />
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <NavbarLinks />
    </b-navbar>
  </div>
</template>

<script>
import NavbarBrand from './NavbarBrand.vue';
import NavbarLinks from './NavbarLinks.vue';
export default {
  components: {
    NavbarBrand,
    NavbarLinks,
  },
};
</script>
