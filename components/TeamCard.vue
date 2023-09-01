<template>
  <div
    class="transition 
          duration-300 
          shadow-xl hover:shadow-2xl
          border-1 border-[#EFEFEF] border-solid rounded
          min-h-[20px] h-[100%] w-[100%]
          whitespace-pre-wrap"
  >
    <div class="p-4">
      <img
        :src="member.img"
        :alt="member.imgAlt"
        class="w-[100px] h-100px rounded"
      />
      <h4>{{member.name}}</h4>
      <p>{{member.role}}</p>
      <p>{{member.description}}</p>

      <div class="flex gap-4">
        <!-- EMAIL -->
        <a
          v-if="member.socialLinks.email"
          :href="member.socialLinks.email"
          target="_blank"
        >
          <div
            class="i-ic-baseline-mail
              text-gray text-3xl transition-color 
              duration-300 hover:text-green"
          ></div>
        </a>

        <!-- WEBSITE  -->
        <a
          v-if="member.socialLinks.website"
          :href="member.socialLinks.website"
          target="_blank"
        >
          <div
            v-if="member.socialLinks.website"
            class="i-ic-baseline-computer
              text-gray text-3xl transition-color 
              duration-300 hover:text-green"
          ></div>
        </a>

        <!-- LINKEDIN -->
        <a
          v-if="member.socialLinks.linkedIn"
          :href="member.socialLinks.linkedIn"
          target="_blank"
        >
          <div
            v-if="member.socialLinks.linkedIn"
            class="i-simple-icons-linkedin
              text-gray text-3xl transition-color 
              duration-300 hover:text-green"
          ></div>
        </a>

        <a
          v-if="member.socialLinks.instagram"
          :href="member.socialLinks.instagram"
          target="_blank"
        >
          <div
            v-if="member.socialLinks.instagram"
            class="i-simple-icons-instagram
              text-gray text-3xl transition-color 
              duration-300 hover:text-green"
          ></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member']
}
</script>
