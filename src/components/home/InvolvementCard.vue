<!-- InvolvementCard.vue -->
<template>
  <div
    class="relative group"
    data-aos="zoom-in"
    data-aos-duration="700"
    :data-aos-delay="index * 150"
  >
    <div
      class="relative h-full bg-gradient-to-br p-8 rounded-3xl text-white overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
      :style="{ backgroundImage: way.gradient }"
    >
      <!-- Pattern Overlay -->
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            white 1px,
            transparent 0
          );
          background-size: 30px 30px;
        "
      ></div>

      <!-- Content -->
      <div class="relative z-10">
        <!-- Icon -->
        <div
          class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md"
        >
          <component :is="way.icon" class="w-7 h-7" :stroke-width="2" />
        </div>

        <!-- Title -->
        <h3 class="text-2xl font-bold mb-3">{{ way.title }}</h3>

        <!-- Description -->
        <p class="text-white/90 mb-6 leading-relaxed min-h-[4.5rem]">
          {{ way.description }}
        </p>

        <!-- CTA Button -->
        <Button
          color="gold"
          :icon-right="ArrowRight"
          class="w-full"
          to="/get-involved"
        >
          {{ way.cta }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const props = defineProps({
  way: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        value.title &&
        value.description &&
        value.icon &&
        value.gradient &&
        value.cta
      );
    },
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
