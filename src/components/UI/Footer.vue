<template>
  <v-footer id="footer" color="success lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-card flat tile class="success">
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
          ><router-link class="site-link" :to="{ name: link }">{{
            link
          }}</router-link></v-btn
        >
        <hr />
        <div class="white--text description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cumque non corporis aliquam doloremque! Autem placeat dolorem
            architecto ea quos. Voluptatibus, alias, consectetur aspernatur
            dignissimos esse fuga cupiditate vel, voluptatum molestiae enim
            ratione minima! Quasi, amet quia praesentium cumque commodi laborum
            reiciendis laudantium iusto distinctio. Et eaque eius quae tempora!
          </p>
          <p>
            This website is made by
            <a
              href="https://www.brianenguyen.com/"
              target="_blank"
              class="footer-link"
              >Brian E. Nguyen</a
            >
            using the Vue.js framework
          </p>
        </div>
      </v-card>
      <v-card flat tile class="success"
        ><a
          v-for="externalLink in externalLinks"
          :key="externalLink.icon"
          :href="externalLink.hyperlink"
          target="_blank"
        >
          <i :class="externalLink.icon" class="mx-3 icon-link"></i> </a
      ></v-card>
      <v-col class="success lighten-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>CSULB Tzu Ching</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'About', 'Team', 'Events', 'Photos', 'Contact'],
      externalLinks: [],
    };
  },
};
</script>

<style scoped>
hr {
  color: white;
  margin-left: 4vw;
  margin-right: 4vw;
}
#footer {
  text-align: center;
}
.site-link {
  font-weight: bold;
  color: white;
  text-decoration: none;
}
.description {
  margin-left: auto;
  padding-left: 40px;
  padding-right: 40px;
}
.icon-link {
  color: white;
  transition: 0.5s;
  margin-bottom: 1rem;
}
.icon-link:hover {
  color: rgb(197, 197, 197);
  transition: 0.5s;
}
.footer-link {
  color: white;
  transition: 0.5s;
}
.footer-link:hover {
  color: rgb(197, 197, 197);
  transition: 0.5s;
}
</style>
