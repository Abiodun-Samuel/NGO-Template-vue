<template>
  <section class="relative py-20 sm:py-28 bg-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
        <p
          class="text-sm font-semibold text-gman-purple-500 uppercase tracking-wider mb-3"
        >
          Trusted Partners
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
        >
          Organizations Supporting Our Mission
        </h2>
        <p class="text-lg text-stone-600 max-w-3xl mx-auto">
          Working together with dedicated partners to amplify our impact and
          reach more communities
        </p>
      </div>

      <!-- Partners Marquee -->
      <div class="relative" data-aos="fade-up" data-aos-delay="200">
        <!-- Gradient Overlays for Seamless Edge -->
        <div
          class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent z-10 pointer-events-none"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-50 via-stone-50/80 to-transparent z-10 pointer-events-none"
        ></div>

        <!-- Marquee Container -->
        <div class="overflow-hidden py-4">
          <div class="flex animate-marquee gap-8">
            <!-- First Set -->
            <div
              v-for="(logo, index) in partners"
              :key="`set1-${index}`"
              class="flex-shrink-0 w-48 h-28 bg-white rounded-2xl shadow-sm border border-stone-200/60 flex items-center justify-center p-2 hover:shadow-lg hover:border-gman-purple-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                :src="logo"
                :alt="`Partner ${index + 1}`"
                class="max-w-full max-h-full rounded object-contain transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <!-- Duplicate Set for Seamless Loop -->
            <div
              v-for="(logo, index) in partners"
              :key="`set2-${index}`"
              class="flex-shrink-0 w-48 h-28 bg-white rounded-2xl shadow-sm border border-stone-200/60 flex items-center justify-center p-2 hover:shadow-lg hover:border-gman-purple-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                :src="logo"
                :alt="`Partner ${index + 1}`"
                class="max-w-full max-h-full rounded object-contain transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  "/assets/partners/partner1.jpeg",
  "/assets/partners/partner2.jpeg",
  "/assets/partners/partner3.jpeg",
  "/assets/partners/partner4.jpeg",
  "/assets/partners/partner5.jpeg",
  "/assets/partners/partner6.jpeg",
  "/assets/partners/partner7.jpeg",
  "/assets/partners/partner8.jpeg",
];
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 50s linear infinite;
  width: fit-content;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* Smooth animations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
