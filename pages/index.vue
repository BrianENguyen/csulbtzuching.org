<template>
  <header
    class="
      h-[75vh]
      bg-gradient-to-r 
    from-gray-700 
    to-gray-900
      text-white
      mb-4
      flex
      items-center
      justify-center
      "
  >
    <div
      class=" 
        container
        mx-auto 
        px-10
        grid 
        grid-cols-2
        gap-4
    "
    >
      <div class="relative">
        <h1 class="text-6xl mb-4">Weili Kang</h1>
        <p>Pianist, flutist, music teacher</p>
      </div>
      <div>
        <img class="rounded-md" width="400px" alt="Profile shot of Weili" />
      </div>
    </div>
  </header>

  <section class="container mx-auto px-10 py-5 grid grid-cols-2 gap-4">
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
      <img class="rounded-md" alt="Weili walking alongside a train" />
    </div>
  </section>

  <section
    class="
      bg-gradient-to-r 
    from-gray-700 
    to-gray-900
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
    py-6
    px-10
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
