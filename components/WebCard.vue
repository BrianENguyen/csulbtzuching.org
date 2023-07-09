<template>
  <div
    class="
    text-white 
    rounded-md 
    bg-gray-900 
    border-l-slate-500 
    border-l-4 
    w-[23vw] 
    h-[170px]
    mx-auto"
  >
    <div class="mt-4 ml-4">
      <h3 class="text-2xl font-bold">{{ page.title }}</h3>
      <p class="text-lg mb-5">
        {{ page.description }}
      </p>
      <a class="text-blue-300 cursor-pointer font-bold italic mt-auto"
        >Learn More</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props : ['page']
}
</script>
