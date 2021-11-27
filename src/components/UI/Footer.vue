<template>
  <v-footer id="footer" padless>
    <v-row justify="center" no-gutters>
      <v-card flat tile>
        <hr />
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cumque non corporis aliquam doloremque! Autem placeat dolorem
            architecto ea quos. Voluptatibus, alias, consectetur aspernatur
            dignissimos esse fuga cupiditate vel, voluptatum molestiae enim
            ratione minima! Quasi, amet quia praesentium cumque commodi laborum
            reiciendis laudantium iusto distinctio. Et eaque eius quae tempora!
          </p>
        </div>
      </v-card>
      <v-card flat tile>
        <a
          v-for="externalLink in externalLinks"
          :key="externalLink.icon"
          :href="externalLink.hyperlink"
          target="_blank"
        >
          <i :class="externalLink.icon" class="mx-3 icon-link"></i> </a
      ></v-card>
      <v-col class="py-4 text-center" cols="12">
        <p>{{ new Date().getFullYear() }} — <strong>CSULB Tzu Ching</strong></p>
        <p>
          Designed by
          <a href="https://www.brianenguyen.com/" target="_blank"
            >Brian Nguyen</a
          >
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
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
  margin-top: 100px;
}
.site-link {
  font-weight: bold;
  text-decoration: none;
}
.description {
  margin-left: auto;
  padding-left: 40px;
  padding-right: 40px;
}
.icon-link {
  color: black;
  transition: 0.5s;
  margin-bottom: 1rem;
}
.icon-link:hover {
  /* color: rgb(197, 197, 197); */
  transition: 0.5s;
}
.footer-link {
  transition: 0.5s;
}
.footer-link:hover {
  transition: 0.5s;
}
</style>
