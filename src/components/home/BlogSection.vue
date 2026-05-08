<template>
  <section
    class="relative py-16 sm:py-20 lg:py-24 mb-20 bg-white overflow-hidden"
  >
    <!-- Premium Background -->
    <div class="absolute inset-0">
      <div
        class="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gman-purple-200/30 via-gman-purple-100/20 to-transparent blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gman-gold-200/40 via-gman-gold-100/20 to-transparent blur-3xl animate-float-medium"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gman-purple-100 to-gman-gold-100 mb-6 sm:mb-8"
          data-aos="zoom-in"
        >
          <BookOpen :size="32" class="text-gman-purple-600" :stroke-width="2" />
        </div>

        <!-- Heading -->
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 sm:mb-6"
          data-aos="fade-up"
        >
          Read Our
          <span
            class="bg-gradient-to-r from-gman-purple-600 to-gman-gold-500 bg-clip-text text-transparent"
          >
            Blog
          </span>
        </h2>

        <!-- Description -->
        <p
          class="text-base sm:text-lg lg:text-xl text-stone-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover inspiring testimonies, mission updates, and stories of lives
          transformed through faith and compassion across Sample Region.
        </p>

        <!-- Features Grid -->
        <div
          class="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex flex-col items-center gap-2 p-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-gman-purple-100 to-gman-purple-200 flex items-center justify-center"
            >
              <Heart
                :size="20"
                class="text-gman-purple-600"
                :stroke-width="2"
              />
            </div>
            <h3 class="font-semibold text-stone-900">Testimonies</h3>
            <p class="text-sm text-stone-600">Real stories of hope</p>
          </div>

          <div class="flex flex-col items-center gap-2 p-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-gman-gold-100 to-gman-gold-200 flex items-center justify-center"
            >
              <MapPin :size="20" class="text-gman-gold-600" :stroke-width="2" />
            </div>
            <h3 class="font-semibold text-stone-900">Mission Updates</h3>
            <p class="text-sm text-stone-600">Latest outreach news</p>
          </div>

          <div class="flex flex-col items-center gap-2 p-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center"
            >
              <Sparkles :size="20" class="text-violet-600" :stroke-width="2" />
            </div>
            <h3 class="font-semibold text-stone-900">Devotionals</h3>
            <p class="text-sm text-stone-600">Spiritual inspiration</p>
          </div>
        </div>

        <!-- CTA Button -->
        <div data-aos="fade-up" data-aos-delay="300">
          <Button
            :href="blogUrl"
            target="_blank"
            rel="noopener noreferrer"
            color="purple"
            variant="solid"
            :icon-right="ArrowRight"
            class="inline-flex"
          >
            Visit Our Blog
          </Button>

          <p class="mt-4 text-sm text-stone-500">New stories added regularly</p>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute top-1/2 left-4 w-20 h-20 rounded-full border-2 border-gman-purple-200 opacity-20"
    ></div>
    <div
      class="absolute bottom-20 right-8 w-16 h-16 rounded-full border-2 border-gman-gold-200 opacity-20"
    ></div>
  </section>
</template>

<script setup>
import { BookOpen, Heart, Sparkles, ArrowRight, MapPin } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

defineProps({
  blogUrl: {
    type: String,
    required: true,
    default: "https://your-blog-url.com",
  },
});
</script>

<style scoped>
@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-30px, 30px) scale(1.05);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(20px, -20px) rotate(3deg);
  }
  66% {
    transform: translate(-15px, 25px) rotate(-3deg);
  }
}

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 18s ease-in-out infinite;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
