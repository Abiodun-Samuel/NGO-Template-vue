<!-- MobileMenuButton.vue -->
<template>
  <button
    @click="$emit('toggle')"
    class="cursor-pointer lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gman-purple-50 hover:text-gman-purple-600 transition-all duration-300"
  >
    <Menu v-if="!isOpen" class="w-6 h-6 transition-transform duration-300" />
    <X v-else class="w-6 h-6 transition-transform duration-300 rotate-90" />
  </button>
</template>

<script setup>
import { Menu, X } from "lucide-vue-next";

defineProps({ isOpen: Boolean });

defineEmits(["toggle"]);
</script>
