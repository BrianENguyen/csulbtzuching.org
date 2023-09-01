<template>
  <footer class="text-center mt-32">
    <div class="flex justify-center mb-4">
      <a href="mailto:tcca.csulb@gmail.com">
        <Icon
          icon="ic:mail"
          class="mx-3 text-gray-500 text-5xl transition-color duration-300 hover:text-green-500"
        />
      </a>
      <a href="https://www.facebook.com/CSULBTzuChing" target="_blank">
        <Icon
          icon="simple-icons:facebook"
          class="mx-3 text-gray-500 text-5xl transition-color duration-300 hover:text-green-500"
        /> </a
      ><a href="https://www.instagram.com/tccaofcsulb/" target="_blank">
        <Icon
          icon="simple-icons:instagram"
          class="mx-3 text-gray-500 text-5xl transition-color duration-300 hover:text-green-500"
        /> </a
      ><a href="https://discord.gg/fmf3JtTNCc">
        <Icon
          icon="simple-icons:discord"
          class="mx-3 text-gray-500 text-5xl transition-color duration-300 hover:text-green-500"
        />
      </a>
    </div>
    <p class="text-lg">{{currentYear}} - CSULB Tzu Ching</p>
    <p>
      Designed and developed by
      <a class="text-blue-500" href="https://brianenguyen.com" target="_blank"
        >Brian Nguyen</a
      >
    </p>
  </footer>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    Icon
  }
}
</script>
