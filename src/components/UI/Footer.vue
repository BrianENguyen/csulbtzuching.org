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
            <i :class="externalLink.icon" class="mx-3 icon-link"></i> </a
        ></v-card>
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
      externalLinks: [
        {
          icon: 'fas fa-envelope fa-2x',
          hyperlink: 'mailto:tcca.csulb@gmail.com',
        },
        {
          icon: 'fab fa-facebook fa-2x',
          hyperlink: 'https://www.facebook.com/CSULBTzuChing',
        },
        {
          icon: 'fab fa-instagram fa-2x',
          hyperlink: 'https://www.instagram.com/tccaofcsulb/',
        },
        {
          icon: 'fab fa-discord fa-2x',
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
