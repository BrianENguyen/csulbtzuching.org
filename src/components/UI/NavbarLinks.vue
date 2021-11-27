<template>
  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <b-nav-item v-for="link in links" :key="link">
        <router-link :to="{ name: link }">{{ link }}</router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'About', 'Team', 'Events', 'Photos'],
    };
  },
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media (min-width: 0px) {
  .navbar-nav {
    text-align: center;
  }
}
@media (min-width: 767px) {
  .navbar-nav {
    margin-left: auto;
    margin-right: 10%;
    float: right;
  }
}
</style>
