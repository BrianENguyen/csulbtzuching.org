<template>
  <router-link class="navbar-brand-align" :to="{ name: 'Home' }">
    <b-navbar-brand>
      <img
        src="../../../assets/logo.6bd7c5f2.webp"
        lazy-src="../../../assets/logo.6bd7c5f2.webp"
        alt=""
        width="50px"
        height="40px"
        rel="preload"
      />
      CSULB Tzu Ching
    </b-navbar-brand>
  </router-link>
</template>

<script>
export default {};
</script>

<style>
.navbar-brand {
  font-weight: bold;
  margin-right: auto;
  font-size: 1.5rem;
  text-transform: none;
  transition: 0.5s;
  color: #2c3e50 !important;
}
.navbar-brand:hover {
  color: #42b983 !important;
  transition: 0.5s;
}
@media (min-width: 576px) {
  .navbar-brand {
    margin-left: 20%;
  }
}
</style>
