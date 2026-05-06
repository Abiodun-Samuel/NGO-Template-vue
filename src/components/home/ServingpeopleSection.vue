<template>
  <section
    class="relative py-20 rounded-lg sm:py-28 bg-gradient-to-br from-stone-900 via-gman-purple-900 to-stone-900 overflow-hidden"
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

    <!-- Enhanced Animated Background Elements -->
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

      <!-- Corner accent orbs -->
      <div
        class="absolute top-10 right-10 w-[300px] h-[300px] bg-gman-gold-500 rounded-full opacity-8 blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-10 left-10 w-[320px] h-[320px] bg-gman-purple-600 rounded-full opacity-10 blur-3xl animate-pulse-slower"
      ></div>

      <!-- Additional depth orbs -->
      <div
        class="absolute top-1/4 right-1/2 w-[260px] h-[260px] bg-gman-purple-500 rounded-full opacity-9 blur-3xl animate-float-medium"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Quote Icon -->
        <div
          class="flex justify-center mb-8"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-gman-gold-400 to-gman-gold-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-6 hover:rotate-12 transition-transform duration-300"
          >
            <Quote :size="32" :stroke-width="2" class="text-white" />
          </div>
        </div>

        <!-- Main Heading -->
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Serving People
        </h2>

        <!-- Quote Content -->
        <div class="text-center mb-10" data-aos="fade-up" data-aos-delay="400">
          <blockquote
            class="text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto"
          >
            "Serving others is the melody of kindness that echoes the divine
            call, embodying the verse from
            <span class="text-gman-gold-300 font-medium">Galatians 5:13</span>
            'Through love, serve one another.' It is a harmonious symphony of
            compassion in our shared journey."
          </blockquote>
        </div>

        <!-- Scripture Card -->
        <div
          class="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="flex flex-col md:flex-row items-start gap-4">
            <div
              class="flex-shrink-0 w-12 h-12 bg-gman-gold-400 rounded-xl flex items-center justify-center"
            >
              <Book :size="24" :stroke-width="2" class="text-white" />
            </div>
            <div>
              <div
                class="text-gman-gold-300 font-semibold text-sm uppercase tracking-wider mb-2"
              >
                Biblical Foundation
              </div>
              <p class="text-white/90 text-lg leading-relaxed italic">
                "For you were called to freedom, brothers. Only do not use your
                freedom as an opportunity for the flesh, but through love serve
                one another."
              </p>
              <div class="text-white/70 text-sm mt-3 font-medium">
                — Galatians 5:13 (ESV)
              </div>
            </div>
          </div>
        </div>

        <!-- Values Grid -->
        <div
          class="grid sm:grid-cols-3 gap-6 mt-12"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div
            v-for="(value, index) in coreBeliefs"
            :key="value.title"
            class="text-center group"
            :data-aos="'zoom-in'"
            :data-aos-delay="800 + index * 100"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <component
                :is="value.icon"
                :size="32"
                :stroke-width="2"
                class="text-gman-gold-300"
              />
            </div>
            <h3 class="text-white font-bold text-lg mb-2">{{ value.title }}</h3>
            <p class="text-white/80 text-sm">{{ value.description }}</p>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="1000">
          <Button
            color="gold"
            variant="solid"
            :icon-right="ArrowRight"
            to="/get-involved"
          >
            Join Our Mission
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Quote,
  Book,
  Heart,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const coreBeliefs = [
  {
    icon: Heart,
    title: "Love in Action",
    description: "Serving with genuine compassion and care",
  },
  {
    icon: Users,
    title: "Unity in Service",
    description: "Stronger together in our mission",
  },
  {
    icon: Lightbulb,
    title: "Divine Purpose",
    description: "Guided by faith and commitment",
  },
];
</script>

<style scoped>
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

@keyframes pulse-slower {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.18;
    transform: scale(1.15);
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

.animate-pulse-slower {
  animation: pulse-slower 20s ease-in-out infinite;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
