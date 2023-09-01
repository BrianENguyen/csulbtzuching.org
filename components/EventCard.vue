<template>
  <div
    class="transition 
          duration-300 
          shadow-xl hover:shadow-2xl
          border-1 border-[#EFEFEF] border-solid rounded
          min-h-[250px] h-[100%] w-[100%]
          whitespace-pre-wrap"
  >
    <div class="px-4">
      <h3>{{event.name}}</h3>
      <p>{{event.date}} @ {{event.time}}</p>
      <p>{{event.location}}</p>
      <p class="mb-8">{{event.description}}</p>
      <a
        :href="event.link"
        class="inline-block bg-green rounded text-white px-4 py-4 decoration-none
              transition duration-300
              hover:bg-emerald"
      >
        Sign Up!
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>
