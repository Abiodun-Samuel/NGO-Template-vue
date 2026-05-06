<!-- MobileMenu.vue -->
<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100"
    >
      <div class="max-w-7xl mx-auto px-4 py-6 space-y-2">
        <component
          :is="item.external ? 'a' : 'router-link'"
          v-for="(item, index) in menuItems"
          :key="item.name"
          :to="!item.external ? item.path : undefined"
          :href="item.external ? item.path : undefined"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          @click="handleClick(item)"
          :class="[
            'cursor-pointer block px-6 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 animate-slideIn relative overflow-hidden group',
            activeItem === item.name && !item.external
              ? 'bg-gradient-to-r from-gman-purple-600 to-gman-purple-700 text-white shadow-lg'
              : item.isCTA
                ? 'bg-gman-purple-600 text-white hover:bg-gman-purple-700'
                : 'text-gray-700 hover:bg-gman-purple-50 hover:text-gman-purple-600',
          ]"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <span class="flex items-center justify-between relative z-10">
            <span class="flex items-center gap-3">
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
              <!-- External link indicator -->
              <ExternalLink
                v-if="item.external"
                class="w-4 h-4 opacity-60"
                :stroke-width="2"
              />
            </span>
            <Check
              v-if="activeItem === item.name && !item.external"
              class="w-5 h-5"
            />
          </span>
        </component>

        <Button
          :icon-left="Users"
          class="flex items-center w-full"
          to="/get-involved"
          color="gold"
          variant="solid"
        >
          <span class="relative z-10">Get Involved</span>
        </Button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { Check, Users, ExternalLink } from "lucide-vue-next";
import Button from "../ui/Button.vue";

defineProps({
  menuItems: Array,
  activeItem: String,
});

const emit = defineEmits(["setActive"]);

const handleClick = (item) => {
  // Only set active for internal links and emit close event
  if (!item.external) {
    emit("setActive", item.name);
  }
};
</script>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.4s ease-out forwards;
  opacity: 0;
}
</style>
