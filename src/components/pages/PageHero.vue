<template>
  <!-- Dynamic Page Hero Component -->
  <section
    class="relative overflow-hidden bg-gradient-to-br from-stone-900 via-gman-purple-900 to-stone-900"
    :class="heightClass"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            white 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <!-- Decorative Geometric Shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Top Right Circles -->
      <div
        class="absolute -top-20 -right-20 w-80 h-80 border-2 border-white/10 rounded-full"
        data-aos="fade-left"
        data-aos-duration="1500"
      ></div>
      <div
        class="absolute -top-10 -right-10 w-56 h-56 border-2 border-gman-gold-400/20 rounded-full"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="100"
      ></div>
      <div
        class="absolute top-10 right-20 w-32 h-32 border border-gman-purple-400/15 rounded-full"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      ></div>

      <!-- Bottom Left Squares -->
      <div
        class="absolute -bottom-20 -left-20 w-72 h-72 border-2 border-white/10 rounded-3xl rotate-12"
        data-aos="fade-right"
        data-aos-duration="1500"
      ></div>
      <div
        class="absolute -bottom-10 left-10 w-48 h-48 border-2 border-gman-purple-400/20 rounded-2xl -rotate-6"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="100"
      ></div>
      <div
        class="absolute bottom-20 left-32 w-24 h-24 border border-gman-gold-400/15 rounded-xl rotate-12"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      ></div>

      <!-- Top Left Hexagon-like -->
      <div
        class="absolute top-1/4 left-10 w-40 h-40 border border-gman-gold-400/15 rounded-2xl rotate-45"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="300"
      ></div>

      <!-- Bottom Right Diamond -->
      <div
        class="absolute bottom-1/4 right-16 w-36 h-36 border border-gman-purple-400/15 rounded-xl rotate-45"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="400"
      ></div>

      <!-- Center Accent Lines -->
      <div
        class="absolute top-1/2 right-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-gman-gold-400/30 to-transparent rotate-45"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-delay="500"
      ></div>
      <div
        class="absolute top-1/3 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-gman-purple-400/30 to-transparent -rotate-45"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-delay="600"
      ></div>

      <!-- Dots Pattern -->
      <div
        class="absolute top-24 right-1/3 w-3 h-3 bg-gman-gold-400/25 rounded-full"
        data-aos="fade"
        data-aos-delay="700"
      ></div>
      <div
        class="absolute top-32 right-1/3 w-2 h-2 bg-gman-gold-400/20 rounded-full"
        data-aos="fade"
        data-aos-delay="750"
      ></div>
      <div
        class="absolute bottom-40 left-1/3 w-3 h-3 bg-gman-purple-400/25 rounded-full"
        data-aos="fade"
        data-aos-delay="800"
      ></div>
      <div
        class="absolute bottom-32 left-1/4 w-2 h-2 bg-gman-purple-400/20 rounded-full"
        data-aos="fade"
        data-aos-delay="850"
      ></div>
      <div
        class="absolute top-1/2 right-1/2 w-2.5 h-2.5 bg-white/15 rounded-full"
        data-aos="fade"
        data-aos-delay="900"
      ></div>

      <!-- Small Accent Squares -->
      <div
        class="absolute top-1/3 right-1/2 w-4 h-4 border border-gman-gold-400/20 rounded rotate-12"
        data-aos="fade"
        data-aos-delay="950"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/2 w-4 h-4 border border-gman-purple-400/20 rounded -rotate-12"
        data-aos="fade"
        data-aos-delay="1000"
      ></div>
    </div>

    <!-- Enhanced Animated Background Orbs -->
    <div class="absolute inset-0">
      <!-- Primary floating orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gman-gold-400 rounded-full opacity-15 blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gman-purple-500 rounded-full opacity-15 blur-3xl animate-float-slower"
      ></div>

      <!-- Additional accent orbs -->
      <div
        class="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gman-gold-300 rounded-full opacity-10 blur-3xl animate-float-medium"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/2 w-[450px] h-[450px] bg-gman-purple-400 rounded-full opacity-12 blur-3xl animate-float-reverse"
      ></div>

      <!-- Mid-layer orbs -->
      <div
        class="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-gman-gold-500 rounded-full opacity-8 blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-1/2 right-1/2 w-[380px] h-[380px] bg-gman-purple-600 rounded-full opacity-10 blur-3xl animate-float-slow"
      ></div>
    </div>

    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      :class="paddingClass"
    >
      <!-- Breadcrumbs -->
      <nav
        v-if="breadcrumbs && breadcrumbs.length"
        class="mb-8"
        aria-label="Breadcrumb"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <ol class="flex flex-wrap items-center gap-2 text-sm">
          <li
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
            class="flex items-center gap-2"
          >
            <component
              :is="crumb.to ? 'router-link' : 'span'"
              :to="crumb.to"
              class="text-white/70 hover:text-white transition-colors duration-200 font-medium"
              :class="{ 'text-white': !crumb.to }"
            >
              {{ crumb.label }}
            </component>
            <ChevronRight
              v-if="index < breadcrumbs.length - 1"
              :size="14"
              class="text-white/40"
              :stroke-width="2"
            />
          </li>
        </ol>
      </nav>

      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gman-gold-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-gman-gold-500"
            ></span>
          </span>
          <span
            class="text-gman-gold-300 font-semibold text-xs tracking-wider uppercase"
          >
            {{ badge }}
          </span>
        </div>

        <!-- Title -->
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-7 leading-tight"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          v-html="formattedTitle"
        ></h1>

        <!-- Description -->
        <p
          class="text-base sm:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          v-html="description"
        ></p>

        <!-- Stats (Optional) -->
        <div
          v-if="stats && stats.length"
          class="grid gap-4 sm:gap-5 max-w-2xl mx-auto mb-10"
          :class="statsGridClass"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300"
          >
            <div
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gman-gold-300 mb-1.5"
            >
              {{ stat.value }}
            </div>
            <div class="text-xs text-white/80">{{ stat.label }}</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div
          v-if="buttons && buttons.length"
          class="flex flex-col sm:flex-row gap-3 justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <Button
            v-for="(button, index) in buttons"
            :key="index"
            :color="button.color || 'gold'"
            :variant="button.variant || 'solid'"
            :icon-right="button.iconRight"
            :icon-left="button.iconLeft"
            :to="button.to"
            :href="button.href"
            @click="button.onClick"
            :class="button.class"
          >
            {{ button.label }}
          </Button>
        </div>

        <!-- Custom Slot for Additional Content -->
        <slot name="additional-content"></slot>
      </div>
    </div>

    <!-- Scroll Indicator (Optional) -->
    <div
      v-if="showScrollIndicator"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
      data-aos="fade-up"
      data-aos-delay="600"
      @click="scrollToNext"
    >
      <div class="animate-bounce">
        <ChevronDown
          :size="28"
          class="text-white/60 hover:text-white/80 transition-colors duration-200"
          :stroke-width="2"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { ChevronDown, ChevronRight } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const props = defineProps({
  // Badge text
  badge: {
    type: String,
    required: true,
  },
  // Title with gradient markers (use {{highlight}} around words to highlight)
  // Example: "Empowering Lives, {{Transforming}} Communities"
  title: {
    type: String,
    required: true,
  },
  // Description (supports HTML)
  description: {
    type: String,
    required: true,
  },
  // Optional stats array
  stats: {
    type: Array,
    default: () => [],
    // Each stat: { value: '5000+', label: 'Lives Touched' }
  },
  // Optional buttons array
  buttons: {
    type: Array,
    default: () => [],
    // Each button: { label: 'Get Involved', color: 'gold', variant: 'solid', to: '/get-involved', iconRight: ArrowRight }
  },
  // Breadcrumbs array
  breadcrumbs: {
    type: Array,
    default: () => [],
    // Each crumb: { label: 'Home', to: '/' } or { label: 'About' } (no 'to' for current page)
  },
  // Hero height variant
  height: {
    type: String,
    default: "default",
    validator: (value) => ["compact", "default", "tall"].includes(value),
  },
  // Show scroll indicator
  showScrollIndicator: {
    type: Boolean,
    default: true,
  },
});

// Computed - Format title with gradient highlighting
const formattedTitle = computed(() => {
  return props.title.replace(
    /\{\{(.+?)\}\}/g,
    '<span class="bg-gradient-to-r from-gman-gold-300 via-gman-gold-400 to-gman-gold-500 bg-clip-text text-transparent">$1</span>',
  );
});

// Computed classes
const heightClass = computed(() => {
  const heights = {
    compact: "min-h-[60vh]",
    default: "min-h-[70vh]",
    tall: "min-h-[85vh]",
  };
  return heights[props.height];
});

const paddingClass = computed(() => {
  const paddings = {
    compact: "py-12 lg:py-16",
    default: "py-16 lg:py-24",
    tall: "py-20 lg:py-32",
  };
  return paddings[props.height];
});

const statsGridClass = computed(() => {
  if (!props.stats.length) return "";
  if (props.stats.length === 2) return "grid-cols-2";
  if (props.stats.length === 3) return "grid-cols-3";
  if (props.stats.length === 4) return "grid-cols-2 sm:grid-cols-4";
  return "grid-cols-2 sm:grid-cols-3";
});

// Scroll to next section
const scrollToNext = () => {
  const nextSection = document.querySelector("section:nth-of-type(2)"); //document.querySelector("section:nth-of-type(0)");
  if (nextSection) {
    const offset = 80;
    const elementPosition =
      nextSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
/* Animations */
@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-50px, 50px) scale(1.05);
  }
}

@keyframes float-slower {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(50px, -50px) scale(0.95);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(5deg);
  }
  66% {
    transform: translate(-20px, 40px) rotate(-5deg);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-40px, -40px) scale(1.08);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.08;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.1);
  }
}

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 25s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 18s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 22s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 15s ease-in-out infinite;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

html {
  scroll-behavior: smooth;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
