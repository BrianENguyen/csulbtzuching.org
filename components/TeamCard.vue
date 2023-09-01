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
        class="w-[100px] h-[100px] rounded"
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
          <Icon
            icon="ic:baseline-mail"
            class="text-gray-500 text-3xl transition-color duration-300 hover:text-green-500"
          />
        </a>

        <!-- WEBSITE  -->
        <a
          v-if="member.socialLinks.website"
          :href="member.socialLinks.website"
          target="_blank"
        >
          <Icon
            icon="ic:baseline-laptop"
            class="text-gray-500 text-3xl transition-color duration-300 hover:text-green-500"
          />
        </a>
        <!-- LINKEDIN -->
        <a
          v-if="member.socialLinks.linkedIn"
          :href="member.socialLinks.linkedIn"
          target="_blank"
        >
          <Icon
            icon="simple-icons:linkedin"
            class="text-gray-500 text-3xl transition-color duration-300 hover:text-green-500"
          />
        </a>

        <a
          v-if="member.socialLinks.instagram"
          :href="member.socialLinks.instagram"
          target="_blank"
        >
          <Icon
            icon="simple-icons:instagram"
            class="text-gray-500 text-3xl transition-color duration-300 hover:text-green-500"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  props: ['member'],
  components: {
    Icon
  }
}
</script>
