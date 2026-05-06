<!-- DesktopMenu.vue -->
<template>
  <div class="hidden lg:flex items-center space-x-1">
    <component
      :is="item.external ? 'a' : 'router-link'"
      v-for="(item, index) in menuItems"
      :key="item.name"
      :to="!item.external ? item.path : undefined"
      :href="item.external ? item.path : undefined"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener noreferrer' : undefined"
      :style="{ animationDelay: `${index * 50}ms` }"
      @click="handleClick(item)"
      class="relative px-5 py-2.5 group animate-fadeIn cursor-pointer"
    >
      <span
        :class="[
          'relative z-10 font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2',
          activeItem === item.name
            ? 'text-gman-purple-600'
            : 'text-gray-700 group-hover:text-gman-purple-600',
        ]"
      >
        <component :is="item.icon" class="w-4 h-4" />
        {{ item.name }}
      </span>

      <!-- Hover background -->
      <div
        class="absolute inset-0 bg-gman-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>

      <!-- Active indicator -->
      <div
        v-if="activeItem === item.name"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gman-purple-600 rounded-full"
      ></div>

      <!-- Underline effect -->
      <div
        class="absolute bottom-0 left-0 h-0.5 w-0 bg-gman-purple-600 group-hover:w-full transition-all duration-300 rounded-full"
      ></div>
    </component>
  </div>
</template>

<script setup>
defineProps({
  menuItems: Array,
  activeItem: String,
});

const emit = defineEmits(["setActive"]);

const handleClick = (item) => {
  // Only set active for internal links
  if (!item.external) {
    emit("setActive", item.name);
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
</style>
