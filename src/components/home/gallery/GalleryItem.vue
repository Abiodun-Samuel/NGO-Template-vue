<template>
  <article
    :class="itemClasses"
    :data-aos="'fade-up'"
    :data-aos-delay="index * 50"
    :data-aos-duration="700"
    @click="$emit('click')"
  >
    <div :class="containerClasses">
      <!-- Image -->
      <img
        :src="item.image"
        :alt="item.alt"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />

      <!-- Subtle Overlay on Hover -->
      <div
        class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <!-- Zoom Icon -->
      <div
        class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div
          class="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300"
        >
          <Maximize2 :size="20" class="text-gman-purple-600" />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { Maximize2 } from "lucide-vue-next";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

defineEmits(["click"]);

const itemClasses = computed(() => [
  "group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300",
  {
    "sm:col-span-2 sm:row-span-2": props.item.size === "large",
    "sm:col-span-2": props.item.size === "wide",
  },
]);

const containerClasses = computed(() => [
  "relative overflow-hidden bg-stone-200",
  props.item.size === "large" ? "h-full" : "h-[280px]",
]);
</script>
