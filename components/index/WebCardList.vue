<template>
  <section
    class="
      bg-gradient-to-r 
    from-gray-700 
    to-gray-900
    grid
    zero:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
    py-6
    px-10
  "
  >
    <WebCard v-for="data in webCardData" :page="data" />
  </section>
</template>

<script>
import WebCard from './WebCard.vue';

export default {
  components: {
    WebCard
  },
  data() {
    return {
      webCardData : [
        {
          title: 'About',
          description: 'Get to know about me and my career',
          url: '/about'
        },
        {
          title: 'Portfolio',
          description: 'View my entire work',
          url: '/portfolio'
        },
        {
          title: 'Lessons',
          description: 'View my various lessons and services',
          url: '/lessons'
        },
        {
          title: 'Gallery',
          description: 'View photos of my performances and experiences',
          url: '/gallery'
        },
        {
          title: 'Contact',
          description: 'Contact me for any inquiries or if you want to have a conversation',
          url: '/contact'
        },
      ]
    }
  }
}
</script>
