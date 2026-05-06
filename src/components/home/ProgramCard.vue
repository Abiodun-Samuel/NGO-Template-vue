<!-- ProgramCard.vue -->
<template>
  <div
    class="group relative bg-white rounded-2xl overflow-hidden shadow hover:shadow hover:-translate-y-2 transition-all duration-500"
    data-aos="fade-up"
    data-aos-duration="700"
    :data-aos-delay="index * 150"
  >
    <!-- Image Container -->
    <div class="relative h-64 overflow-hidden">
      <img
        :src="program.image"
        :alt="program.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      ></div>

      <!-- Icon Badge -->
      <div
        class="absolute top-4 left-4 w-9 h-9 rounded-xl bg-gman-gold-400 shadow flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
      >
        <component
          :is="program.icon"
          class="w-5 h-5 text-white"
          :stroke-width="2"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3
        class="text-xl font-bold text-stone-900 mb-3 group-hover:text-gman-purple-600 transition-colors duration-300"
      >
        {{ program.title }}
      </h3>
      <p class="text-stone-600 leading-relaxed">
        {{ program.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  program: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.title && value.description && value.image && value.icon;
    },
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
