<template>
  <Teleport to="body">
    <transition name="lightbox">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        @click="$emit('close')"
      >
        <!-- Close Button -->
        <button
          class="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-300 z-10"
          @click="$emit('close')"
          aria-label="Close lightbox"
        >
          <X :size="24" class="text-white" />
        </button>

        <!-- Navigation Buttons -->
        <button
          v-if="currentIndex > 0"
          class="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-300 z-10"
          @click.stop="$emit('previous')"
          aria-label="Previous image"
        >
          <ChevronLeft :size="24" class="text-white" />
        </button>

        <button
          v-if="currentIndex < items.length - 1"
          class="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-300 z-10"
          @click.stop="$emit('next')"
          aria-label="Next image"
        >
          <ChevronRight :size="24" class="text-white" />
        </button>

        <!-- Image Container -->
        <div class="relative max-w-7xl max-h-[90vh] w-full px-4" @click.stop>
          <img
            :src="currentItem.image"
            :alt="currentItem.alt"
            class="w-full h-full object-contain rounded-2xl shadow-2xl"
          />
        </div>

        <!-- Counter -->
        <div
          class="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold"
        >
          {{ currentIndex + 1 }} / {{ items.length }}
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed } from "vue";
import { X, ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
});

defineEmits(["close", "next", "previous"]);

const currentItem = computed(() => props.items[props.currentIndex]);
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from img,
.lightbox-leave-to img {
  transform: scale(0.9);
  transition: transform 0.3s ease;
}
</style>
