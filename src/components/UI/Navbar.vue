<template>
  <div id="nav">
    <b-navbar toggleable="md" type="light" variant="light" fixed="top">
      <router-link class="navbar-brand-align" :to="{ name: 'Home' }"
        ><b-navbar-brand>CSULB Tzu Ching</b-navbar-brand></router-link
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="link in links" :key="link">
            <router-link :to="{ name: link }">{{ link }}</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'About', 'Team', 'Events', 'Photos', 'Contact'],
    };
  },
};
</script>

<style scoped>
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
.navbar-brand-align {
  margin-left: 10%;
}
</style>
