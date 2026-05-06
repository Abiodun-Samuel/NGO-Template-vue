<template>
  <section class="relative overflow-hidden bg-[#fafaf9]">
    <!-- Premium Background -->
    <div class="absolute inset-0">
      <div
        class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/30 via-purple-100/20 to-transparent blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/40 via-yellow-50/30 to-transparent blur-3xl animate-float-medium"
      ></div>
      <div
        class="absolute -bottom-20 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-purple-100/25 via-violet-50/20 to-transparent blur-3xl animate-float-slower"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center py-10 sm:py-12 min-h-[80vh] sm:min-h-[85vh]"
        >
          <!-- Left: Content -->
          <div
            class="space-y-5 sm:space-y-6 lg:space-y-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <!-- Badge -->
            <div
              class="inline-flex items-center gap-2.5 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-full border border-amber-200/50 shadow-sm"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"
                ></span>
              </span>
              <span
                class="text-[10px] font-bold text-stone-700 tracking-wider uppercase"
              >
                GMAN
              </span>
              <div class="h-3 w-px bg-stone-300"></div>
              <span class="text-[10px] text-stone-600 font-medium">
                Registered NGO
              </span>
            </div>

            <!-- Headline -->
            <div
              class="space-y-1.5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <h1
                class="text-[2.3rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight"
              >
                <span class="block text-stone-700">Empowering</span>
                <span class="block">
                  <span
                    class="bg-gradient-to-r from-purple-600 via-amber-500 to-amber-600 bg-clip-text text-transparent"
                  >
                    Lives.
                  </span>
                </span>
                <span class="block">
                  <span
                    class="bg-gradient-to-r from-amber-600 via-purple-500 to-purple-600 bg-clip-text text-transparent"
                  >
                    Transforming
                  </span>
                </span>
                <span class="block text-stone-700">Communities</span>
              </h1>
            </div>

            <!-- Gold Line -->
            <div
              class="flex items-center gap-2.5 justify-center lg:justify-start"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div
                class="h-px w-14 bg-gradient-to-r from-amber-500 to-amber-300"
              ></div>
              <div class="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
              <div
                class="h-px w-8 bg-gradient-to-r from-amber-300 to-transparent"
              ></div>
            </div>

            <!-- Description -->
            <p
              class="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Through compassionate outreach and empowerment programs, we serve
              communities with love and create lasting positive change.
            </p>

            <!-- CTAs -->
            <div
              class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <Button
                to="/get-involved"
                color="purple"
                :icon-right="ArrowRight"
              >
                Get Involved
              </Button>

              <Button
                to="/about"
                variant="outline"
                color="gray"
                :icon-right="Info"
              >
                Learn More
              </Button>
            </div>

            <!-- Trust Badges -->
            <div
              class="flex flex-wrap items-center gap-4 sm:gap-5 pt-2 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div class="flex items-center gap-2.5">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center"
                >
                  <CheckCircle
                    class="w-4 h-4 text-amber-600"
                    :stroke-width="2.5"
                  />
                </div>
                <span class="text-xs sm:text-sm font-semibold text-stone-700">
                  Transparent
                </span>
              </div>
              <div class="flex items-center gap-2.5">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center"
                >
                  <Shield class="w-4 h-4 text-purple-600" :stroke-width="2.5" />
                </div>
                <span class="text-xs sm:text-sm font-semibold text-stone-700">
                  Verified
                </span>
              </div>
              <div class="flex items-center gap-2.5">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center"
                >
                  <Users class="w-4 h-4 text-amber-600" :stroke-width="2.5" />
                </div>
                <span class="text-xs sm:text-sm font-semibold text-stone-700">
                  Community
                </span>
              </div>
            </div>

            <!-- Stats -->
            <div
              class="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div
                class="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-stone-200/60 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div
                  class="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full"
                ></div>

                <!-- Very small icon -->
                <div
                  class="w-6 h-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  <Users
                    :size="12"
                    class="text-amber-600"
                    :stroke-width="2.5"
                  />
                </div>

                <div
                  class="text-xl sm:text-2xl font-bold text-stone-800 mb-0.5"
                >
                  5000+
                </div>
                <div class="text-[10px] sm:text-xs text-stone-600 font-medium">
                  Lives Impacted
                </div>
              </div>

              <div
                class="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-stone-200/60 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div
                  class="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full"
                ></div>

                <!-- Very small icon -->
                <div
                  class="w-6 h-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  <MapPin
                    :size="12"
                    class="text-purple-600"
                    :stroke-width="2.5"
                  />
                </div>

                <div
                  class="text-xl sm:text-2xl font-bold text-stone-800 mb-0.5"
                >
                  50+
                </div>
                <div class="text-[10px] sm:text-xs text-stone-600 font-medium">
                  Communities
                </div>
              </div>

              <div
                class="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-stone-200/60 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div
                  class="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full"
                ></div>

                <!-- Very small icon -->
                <div
                  class="w-6 h-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  <Utensils
                    :size="12"
                    class="text-amber-600"
                    :stroke-width="2.5"
                  />
                </div>

                <div
                  class="text-xl sm:text-2xl font-bold text-stone-800 mb-0.5"
                >
                  2500+
                </div>
                <div class="text-[10px] sm:text-xs text-stone-600 font-medium">
                  Meals Served
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Dynamic Image Gallery -->
          <div
            class="relative h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] mt-8 lg:mt-0"
          >
            <div class="relative w-full h-full">
              <!-- Image 1 - Main Focus -->
              <div
                class="absolute left-[5%] top-[8%] w-[52%] h-[58%] lg:w-[54%] lg:h-[60%] xl:w-[56%] xl:h-[62%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl z-30 border-2 sm:border-4 border-white group"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img
                  :src="galleryImages[0]"
                  alt="Community Impact"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-purple-900/10 to-transparent"
                ></div>
                <div
                  class="absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Heart :size="18" class="text-amber-500" :stroke-width="2" />
                </div>
              </div>

              <!-- Image 2 - Top Right -->
              <div
                class="absolute right-0 top-0 w-[42%] h-[45%] lg:w-[44%] lg:h-[47%] xl:w-[46%] xl:h-[49%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl z-20 border-2 sm:border-4 border-amber-100 group"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <img
                  :src="galleryImages[1]"
                  alt="Healthcare Services"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <div
                  class="absolute -top-2 -right-2 w-16 h-16 bg-amber-400/30 rounded-full blur-xl"
                ></div>
              </div>

              <!-- Image 3 - Middle Left -->
              <div
                class="absolute left-0 top-[42%] w-[38%] h-[35%] lg:w-[40%] lg:h-[37%] xl:w-[42%] xl:h-[39%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl z-15 border-2 sm:border-4 border-purple-100 group"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <img
                  :src="galleryImages[2]"
                  alt="Food Distribution"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-tl from-purple-900/30 via-transparent to-transparent"
                ></div>
                <div
                  class="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-300/30"
                ></div>
              </div>

              <!-- Image 4 - Bottom Right -->
              <div
                class="absolute right-[8%] bottom-[5%] w-[48%] h-[48%] lg:w-[50%] lg:h-[50%] xl:w-[52%] xl:h-[52%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl z-25 border-2 sm:border-4 border-white group"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  :src="galleryImages[3]"
                  alt="Education & Empowerment"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent"
                ></div>
                <div
                  class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Sparkles
                    :size="20"
                    class="text-purple-500"
                    :stroke-width="2"
                  />
                </div>
              </div>

              <!-- Image 5 - Bottom Left -->
              <div
                class="absolute left-[18%] bottom-0 w-[35%] h-[32%] lg:w-[37%] lg:h-[34%] xl:w-[39%] xl:h-[36%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg z-10 border-2 sm:border-4 border-stone-100 group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <img
                  :src="galleryImages[4]"
                  alt="Community Programs"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-stone-900/20"
                ></div>
                <div
                  class="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 bg-amber-400/20 rounded-full blur-md"
                ></div>
              </div>

              <!-- Floating Card 1 -->
              <div
                class="absolute top-[32%] left-[8%] bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-3 z-40 hidden sm:block border border-amber-200/50 animate-float-card"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <div class="flex items-center gap-2 sm:gap-3">
                  <div
                    class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center"
                  >
                    <Heart
                      class="w-4 h-4 sm:w-5 sm:h-5 text-amber-600"
                      :stroke-width="2"
                    />
                  </div>
                  <div>
                    <div class="text-xl font-bold text-stone-800">2500+</div>
                    <div
                      class="text-[9px] sm:text-[10px] text-stone-600 font-medium"
                    >
                      Meals Served
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Card 2 -->
              <div
                class="absolute bottom-[38%] right-[2%] bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-3 z-40 hidden md:block border border-purple-200/50 animate-float-card-reverse"
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                <div class="flex items-center gap-2 sm:gap-3">
                  <div
                    class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center"
                  >
                    <Stethoscope
                      class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600"
                      :stroke-width="2"
                    />
                  </div>
                  <div>
                    <div class="text-xl font-bold text-stone-800">15+</div>
                    <div
                      class="text-[9px] sm:text-[10px] text-stone-600 font-medium"
                    >
                      Medical Missions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ArrowRight,
  Info,
  CheckCircle,
  Shield,
  Users,
  Heart,
  Stethoscope,
  Sparkles,
  MapPin,
  Utensils,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const galleryImages = [
  "/assets/hero/image1a.jpg",
  "/assets/hero/image1b.jpg",
  "/assets/hero/image1c.jpg",
  "/assets/hero/image1d.jpeg",
  "/assets/hero/image1e.jpeg",
];
</script>

<style scoped>
@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-100px, 100px) scale(1.3);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(80px, -80px) scale(1.2);
  }
}

@keyframes float-slower {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-60px, -60px) scale(1.4);
  }
}

@keyframes float-card {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
}

@keyframes float-card-reverse {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(-2deg);
  }
}

.animate-float-slow {
  animation: float-slow 30s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 35s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 40s ease-in-out infinite;
}

.animate-float-card {
  animation: float-card 4s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-card-reverse {
  animation: float-card-reverse 4.5s ease-in-out infinite;
  animation-delay: 2.3s;
}
</style>
