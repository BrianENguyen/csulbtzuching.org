<template>
  <div
    class="relative
          mb-12
        bg-black
          border-none 
          zero:h-[35vh]
          xs:h-[50vh]
          md:mt-0
          md:h-[70vh]
          lg:h-screen
          "
  >
    <img
      :src="src"
      decoding="async"
      :class="'object-cover w-screen relative z-0 zero:h-[35vh] xs:h-[50vh] md:h-[70vh] lg:h-screen'"
    />
    <div
      class="text-white absolute inset-0 flex justify-center items-center flex-col"
    >
      <h1 class="zero:text-[7vw] xs:text-[5vw] md:text-[5rem]">
        CSULB Tzu Ching
      </h1>
      <p
        class="text-white zero:text-[1.2rem] xs:text-[1.2rem] md:text-[1.6rem] text-center"
      >
        "With open arms and helping hands, our volunteers are here to serve you"
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1648148269/CSULB_TC_Website/Jumbotron/social-day-group.webp'
    }
  }
}
</script>
