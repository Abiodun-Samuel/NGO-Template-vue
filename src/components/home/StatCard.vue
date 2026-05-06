<!-- StatCard.vue -->
<template>
  <div
    class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-gman-gold-400/20 transition-all duration-300 group"
    data-aos="zoom-in"
    data-aos-duration="600"
    :data-aos-delay="index * 100"
  >
    <!-- Decorative Element -->
    <div
      class="absolute -top-3 -right-3 w-12 h-12 bg-gman-gold-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
    ></div>

    <!-- Icon -->
    <component
      :is="iconComponent"
      class="w-10 h-10 sm:w-12 sm:h-12 text-gman-gold-300 mb-4 group-hover:scale-110 transition-transform duration-300"
      :stroke-width="1.5"
    />

    <!-- Value -->
    <div class="text-4xl sm:text-5xl font-bold text-white mb-2">
      {{ stat.value }}
    </div>

    <!-- Label -->
    <div class="text-sm sm:text-base text-purple-100 font-medium">
      {{ stat.label }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Users, Heart, MapPin, Award } from "lucide-vue-next";

const props = defineProps({
  stat: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        value.iconName &&
        value.value &&
        value.label &&
        ["Users", "Heart", "MapPin", "Award"].includes(value.iconName)
      );
    },
  },
  index: {
    type: Number,
    required: true,
  },
});

const iconMap = {
  Users,
  Heart,
  MapPin,
  Award,
};

const iconComponent = computed(() => iconMap[props.stat.iconName]);
</script>
