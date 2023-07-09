<template>
  <section
    class="
      h-screen
      bg-gradient-to-r 
    from-gray-700 
    to-gray-900
      grid
      grid-rows-2
      text-white
      mb-4
      "
  >
    <div class="container mx-auto">
      <h1 class="text-5xl">Weili Kang</h1>
      <p>Pianist, flutist, music teacher, private tutorer</p>
    </div>
  </section>

  <section class="container mx-auto grid grid-cols-2 gap-4">
    <div>
      <h2 class="text-4xl text-center mb-4">Welcome to Weili's Website</h2>
      <p class="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis
        doloremque iste quisquam est, sed laudantium numquam optio sequi
        eligendi natus facilis odio provident distinctio exercitationem quis
        voluptatibus nesciunt quas.
      </p>
      <p class="mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        obcaecati ad, eligendi inventore facere illo non recusandae at
        dignissimos
      </p>
      <p class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
        perspiciatis nemo numquam quos ipsa illum est dicta eos magni amet aut
        neque, voluptates et! Error laudantium natus quae perspiciatis placeat
        omnis asperiores amet explicabo. Error, minima ducimus, tenetur ipsa
        veniam et saepe officiis nesciunt quidem illo tempore vero iure odio!
      </p>
    </div>
    <div>
      <h3>Insert Image here</h3>
    </div>
  </section>

  <section
    class="
      bg-gradient-to-r 
    from-gray-700 
    to-gray-900
    grid
    grid-cols-3
    gap-4
    py-6
  "
  >
    <WebCard v-for="webCard in webCardList" :page="webCard" />
  </section>
</template>

<script>
import WebCard from '~/components/WebCard.vue'

export default {
  components: {
    WebCard
  },
  data() {
    return {
      webCardList : [
        {
          title: 'About',
          description: 'Get to know about me and my career'
        },
        {
          title: 'Portfolio',
          description: 'View my entire work'
        },
        {
          title: 'Lessons',
          description: 'View my various lessons and services'
        },
        {
          title: 'Gallery',
          description: 'View photos of my performances and experiences'
        },
        {
          title: 'Contact',
          description: 'Contact me for any inquiries or if you want to have a conversation'
        },
      ]
    }
  }
}
</script>
