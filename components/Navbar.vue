<template>
  <nav class="bg-white border-gray-200 fixed w-[100%] h-70px z-[1] shadow-xl">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <div class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >CSULB Tzu Ching</span
        >
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMobileMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="list-none rounded shadow-xl font-medium md:flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
          :class='isMobileMenuOpen ? "flex" : "hidden"'
        >
          <li v-for="link in links" :key="link">
            <a
              :href="`#${link}`"
              class="block py-2 pl-3 pr-4 text-black font-bold hover:text-green-500 transition-color duration-300 decoration-none"
            >
              {{ link.charAt(0).toUpperCase() + link.slice(1) }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: ['about', 'footprints', 'events', 'team', 'donate'],
      isMobileMenuOpen: false // Track the mobile menu state
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
}
</script>
