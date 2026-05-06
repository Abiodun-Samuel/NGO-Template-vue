<!-- GetInvolvedButton.vue -->
<template>
  <Button
    :icon-left="Users"
    class="hidden lg:flex items-center"
    to="/get-involved"
    color="gold"
    variant="solid"
  >
    <span class="relative z-10">Get Involved</span>
  </Button>

  <!-- <router-link
    class="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gman-purple-600 to-gman-purple-700 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group cursor-pointer"
  >
    <Users class="w-4 h-4 relative z-10" />
    <span class="relative z-10">Get Involved</span>

    Animated gradient overlay
    <div
      class="absolute inset-0 bg-gradient-to-r from-gman-purple-700 to-gman-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    Shine effect
    <div class="absolute inset-0 overflow-hidden rounded-lg">
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
      ></div>
    </div>
  </router-link> -->
</template>

<script setup>
import { Users } from "lucide-vue-next";
import Button from "../ui/Button.vue";

defineProps({
  active: Boolean,
});
</script>
