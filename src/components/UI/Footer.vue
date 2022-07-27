<template>
  <v-footer color="white" id="footer" padless>
    <v-row id="footer_content" no-gutters>
      <v-col cols="12">
        <v-card flat tile
          ><a
            v-for="externalLink in externalLinks"
            :key="externalLink.icon"
            :href="externalLink.hyperlink"
            target="_blank"
          >
            <!-- <img
              src="../../assets/svg/envelope-solid.svg"
              class="mx-3 icon-link"
              alt=""
            /> -->
            <img :src="externalLink.icon" class="mx-3 icon-link" alt="" />
            <!-- <p>{{ externalLink.icon }}</p> -->
          </a></v-card
        >
        <v-col class="py-4" cols="12">
          <p>{{ new Date().getFullYear() }} — CSULB Tzu Ching</p>
          <p>
            Designed and developed by
            <a href="https://brianenguyen.com/" target="_blank">Brian Nguyen</a>
          </p>
        </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      // you need the 'require' function when binding images
      externalLinks: [
        {
          icon: require('../../assets/svg/envelope-solid.svg'),
          hyperlink: 'mailto:tcca.csulb@gmail.com',
        },
        {
          icon: require('../../assets/svg/facebook-brands.svg'),
          hyperlink: 'https://www.facebook.com/CSULBTzuChing',
        },
        {
          icon: require('../../assets/svg/instagram-brands.svg'),
          hyperlink: 'https://www.instagram.com/tccaofcsulb/',
        },
        {
          icon: require('../../assets/svg/discord-brands.svg'),
          hyperlink: 'https://discord.gg/fmf3JtTNCc',
        },
      ],
    };
  },
};
</script>

<style>
#footer {
  text-align: center;
  margin-top: 100px;
}
#footer_content {
  text-align: center;
  font-weight: 300;
}
@media (min-width: 0px) {
  #footer_content {
    margin: 0px;
  }
}
@media (min-width: 576px) {
  #footer_content {
    margin: 10px;
  }
}

.icon-link {
  color: rgb(116, 116, 116);
  transition: 0.5s;
  margin-bottom: 1rem;
  width: 50px;
}
.icon-link:hover {
  color: rgb(24, 24, 24);
  transition: 0.5s;
}
.footer-link {
  transition: 0.5s;
}
.footer-link:hover {
  transition: 0.5s;
}
</style>
