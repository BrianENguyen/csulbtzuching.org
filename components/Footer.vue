<template>
  <footer class="bg-gray-800 text-white py-12">
    <section class="container mx-auto mb-4">
      <div class="grid grid-cols-2">
        <h2>Weili Kang</h2>
        <ul>
          <li class="inline px-4 text-lg font-bold" v-for="navlink in navlinks">
            <a href="">{{ navlink }}</a>
          </li>
        </ul>
      </div>
    </section>
    <hr />
    <section class="mt-4 text-center">
      <p class="mb-4">{{ currentYear }} &mdash; Weili Kang</p>
      <p>Designed and developed by Brian Nguyen</p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navlinks: [
        'Home',
        'Portfolio',
        'Lessons',
        'Gallery',
        'Contact',
      ],
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
