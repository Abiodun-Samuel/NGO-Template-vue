<template>
  <section
    class="relative py-20 sm:py-28 mb-20 rounded-lg bg-gradient-to-br from-stone-900 via-gman-purple-900 to-stone-900 overflow-hidden"
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
      <div class="max-w-4xl mx-auto">
        <!-- Heart Icon -->
        <div
          class="flex justify-center mb-8"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-gman-gold-400 to-gman-gold-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-6 hover:rotate-12 transition-transform duration-300"
          >
            <Heart :size="32" :stroke-width="2" class="text-white" />
          </div>
        </div>

        <!-- Heading -->
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Support Our Work
        </h2>

        <!-- Description -->
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="text-center mb-10 max-w-3xl mx-auto"
        >
          <p class="text-lg sm:text-xl text-white/90 leading-relaxed mb-4">
            Every act of kindness, no matter how small, has the power to make a
            difference. Your generosity fuels positive change and creates a
            ripple effect of compassion.
          </p>
          <p class="text-base text-white/80 leading-relaxed">
            As Aaron and Hur lifted up Moses' hands while Joshua fought the
            battle of the Amalekites (Exodus 17:12–14), we hereby make this
            clarion call seeking your gifts of love.
          </p>
        </div>

        <!-- Bank Details Card -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 shadow-xl hover:bg-white/15 transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="flex items-center justify-center gap-3 mb-6">
            <div
              class="w-12 h-12 bg-gman-gold-400 rounded-xl flex items-center justify-center"
            >
              <Landmark :size="24" :stroke-width="2" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">Bank Details</h3>
          </div>
          <div class="space-y-3 text-white/90 text-left max-w-md mx-auto">
            <div
              class="flex justify-between items-center py-3 border-b border-white/10"
            >
              <span class="font-semibold text-white">Bank:</span>
              <span class="text-right">Zenith Bank Sample Region</span>
            </div>
            <div
              class="flex justify-between items-center py-3 border-b border-white/10"
            >
              <span class="font-semibold text-white">Account Number:</span>
              <span class="font-mono text-gman-gold-300 text-lg"
                >1224220999</span
              >
            </div>
            <div class="flex justify-between items-center py-3">
              <span class="font-semibold text-white">Account Name:</span>
              <span class="text-right">Community Impact Network</span>
            </div>
          </div>
        </div>

        <!-- Appreciation Message -->
        <div
          class="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-10 border border-white/10"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <p class="text-white/90 leading-relaxed text-center">
            We'd like to use this opportunity to appreciate our friends and
            partners who have tremendously supported our past missions. The good
            Lord reward you bountifully, amen.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Button
            color="gold"
            variant="solid"
            :icon-right="Heart"
            to="/get-involved"
          >
            Make a Donation
          </Button>
          <Button
            color="gold"
            variant="outline"
            :icon-right="ArrowRight"
            to="/contact"
            class="border-2 border-gman-gold-400/60 text-white hover:bg-gman-gold-400/10 hover:border-gman-gold-400 focus:ring-gman-gold-400/30"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart, ArrowRight, Landmark } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
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
