<template>
  <router-link to="/" class="relative group cursor-pointer">
    <div class="relative">
      <!-- Glow effect -->
      <div
        class="absolute inset-0 rounded-full bg-gman-purple-600 blur-xl transition-opacity duration-500"
        :class="isScrolled ? 'opacity-0' : 'opacity-25 group-hover:opacity-25'"
      ></div>

      <!-- Logo container -->
      <div
        class="relative rounded overflow-hidden shadow-lg transform transition-all duration-500"
        :class="[isScrolled ? 'w-[55px] h-[55px]' : 'w-[70px] h-[70px]']"
      >
        <img
          src="/assets/images/logo/logo.jpg"
          alt="Community Impact Network Logo"
          class="w-full h-full object-cover"
        />

        <!-- Purple overlay on hover -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-gman-purple-600/0 to-gman-purple-700/20 transition-opacity duration-500"
          :class="
            isScrolled ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          "
        ></div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  isScrolled: Boolean,
});
</script>
