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
  <WebCardList />
</template>

<script>
import WebCardList from '~/components/index/WebCardList'

export default {
  components: {
    WebCardList
  },
}
</script>
