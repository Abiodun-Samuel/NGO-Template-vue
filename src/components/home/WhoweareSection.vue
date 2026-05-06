<template>
  <section class="relative py-20 sm:py-28 bg-white overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] bg-gman-purple-100 rounded-full blur-3xl opacity-30 -z-0"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gman-gold-100 rounded-full blur-3xl opacity-30 -z-0"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
        <p
          class="text-sm font-semibold text-gman-purple-500 uppercase tracking-wider mb-3"
        >
          Who We Are
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
        >
          Our Strength
        </h2>
        <p class="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Our strength lies not only in our words but also in our actions to
          achieve our goals
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Video Side -->
        <div class="relative" data-aos="fade-right" data-aos-duration="1000">
          <!-- Decorative Element -->
          <div
            class="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 border-4 border-gman-gold-400 rounded-2xl -z-10"
            data-aos="fade-right"
            data-aos-delay="200"
          ></div>

          <!-- Video Container -->
          <div
            class="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group"
          >
            <!-- Loading State -->
            <div
              v-if="!videoLoaded"
              class="absolute inset-0 bg-gradient-to-br from-gman-purple-100 to-gman-gold-100 flex items-center justify-center z-10"
            >
              <div class="text-center">
                <Loader2
                  class="w-12 h-12 text-gman-purple-500 animate-spin mx-auto mb-4"
                />
                <p class="text-stone-600 text-sm">Loading video...</p>
              </div>
            </div>

            <!-- Video Element -->
            <video
              ref="videoRef"
              :class="{ 'opacity-0': !videoLoaded, 'opacity-100': videoLoaded }"
              class="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover transition-opacity duration-500"
              playsinline
              preload="auto"
              :poster="videoPoster"
              @loadeddata="handleVideoLoaded"
              @click="togglePlay"
              @ended="handleVideoEnded"
              @pause="handleVideoPause"
              @play="handleVideoPlay"
              @volumechange="handleVolumeChange"
            >
              <source :src="videoSrc" type="video/mp4" />
              <img
                :src="videoPoster"
                alt="Team collaboration"
                class="w-full h-full object-cover"
              />
            </video>

            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
            ></div>

            <!-- Play/Pause Button -->
            <button
              v-if="videoLoaded"
              @click="togglePlay"
              class="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-colors duration-300"
              :class="{ 'bg-black/30': !isPlaying }"
              aria-label="Toggle video playback"
            >
              <div
                v-if="!isPlaying"
                class="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
              >
                <Play
                  :size="28"
                  class="text-gman-purple-600 ml-1 sm:w-8 sm:h-8"
                  :fill="'currentColor'"
                />
              </div>
              <div
                v-else
                class="w-14 h-14 sm:w-16 sm:h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Pause
                  :size="24"
                  class="text-gman-purple-600 sm:w-7 sm:h-7"
                  :fill="'currentColor'"
                />
              </div>
            </button>

            <!-- Volume Control -->
            <button
              v-if="videoLoaded && isPlaying"
              @click.stop="toggleMute"
              class="absolute top-4 right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
              aria-label="Toggle sound"
            >
              <VolumeX
                v-if="isMuted"
                :size="18"
                class="text-white sm:w-5 sm:h-5"
                :stroke-width="2"
              />
              <Volume2
                v-else
                :size="18"
                class="text-white sm:w-5 sm:h-5"
                :stroke-width="2"
              />
            </button>

            <!-- Video Controls Hint -->
            <div
              v-if="videoLoaded"
              class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none"
            >
              <div
                class="bg-black/60 backdrop-blur-sm px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full"
              >
                <p
                  class="text-white text-xs font-medium flex items-center gap-1.5 sm:gap-2"
                >
                  <component
                    :is="isMuted ? VolumeX : Volume2"
                    :size="12"
                    class="sm:w-3.5 sm:h-3.5"
                  />
                  <span>{{
                    isPlaying
                      ? isMuted
                        ? "Tap icon to unmute"
                        : "Playing"
                      : "Tap to play"
                  }}</span>
                </p>
              </div>
              <div
                v-if="isPlaying"
                class="bg-gman-purple-500 px-2 py-1 rounded-full animate-pulse"
              >
                <span class="text-white text-xs font-bold">LIVE</span>
              </div>
            </div>
          </div>

          <!-- Floating Stats Card - Bottom Center -->
          <div
            class="flex flex-col mt-2 sm:-mt-14 lg:-mt-[60px] w-52 sm:w-60 sm:max-w-xs z-20 mx-auto shadow border border-stone-100 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gman-gold-400 to-gman-gold-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow flex-shrink-0"
              >
                <Award
                  :size="20"
                  :stroke-width="2"
                  class="text-white sm:w-6 sm:h-6"
                />
              </div>
              <div>
                <div class="text-xl sm:text-2xl font-bold text-stone-900">
                  5000+
                </div>
                <div class="text-xs sm:text-sm text-stone-600">
                  Lives Impacted
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-2 text-xs text-gman-purple-600 font-semibold"
            >
              <TrendingUp :size="14" class="sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Growing every day</span>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div
          class="flex flex-col bg-gradient-to-br from-stone-50/50 via-white to-gman-purple-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-100/50 shadow"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="space-y-6 sm:space-y-8">
            <!-- Main Description -->
            <p class="text-sm sm:text-base text-stone-600 leading-relaxed">
              The
              <span
                class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gman-purple-600 to-gman-gold-500"
              >
                Glorious Mission Aid Network (GMAN)
              </span>
              is the Mission and Outreach arm of The Glorious Church Int'l. Our
              mandate is to meet the pressing needs of the impoverished and most
              vulnerable in our society with
              <span class="font-semibold text-stone-800"
                >dignity, compassion, and lasting impact.</span
              >
            </p>

            <!-- Key Focus Areas -->
            <div class="space-y-3 sm:space-y-4">
              <div
                v-for="(area, index) in focusAreas"
                :key="area.title"
                class="group relative"
                data-aos="fade-left"
                :data-aos-delay="200 + index * 100"
              >
                <!-- Hover Background -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-gman-purple-50 to-transparent rounded-xl sm:rounded-2xl transition-all duration-500 -z-10"
                  :class="
                    index === 1
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  "
                ></div>

                <div
                  class="flex flex-col md:flex-row items-start gap-3 sm:gap-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300"
                >
                  <!-- Icon Box -->
                  <div class="relative flex-shrink-0">
                    <div
                      class="absolute inset-0 bg-gman-purple-400/30 rounded-xl sm:rounded-2xl blur-lg transition-opacity duration-500 animate-pulse"
                      :class="
                        index === 1
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      "
                    ></div>

                    <div
                      class="relative w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gman-purple-50 via-gman-purple-100/80 to-gman-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center border-2 transition-all duration-500 shadow"
                      :class="
                        index === 1
                          ? 'border-gman-purple-300 shadow-lg'
                          : 'border-gman-purple-100 group-hover:border-gman-purple-300 group-hover:shadow-lg'
                      "
                    >
                      <div
                        class="absolute inset-2 bg-gradient-to-br from-white/40 to-transparent rounded-lg sm:rounded-xl"
                      ></div>
                      <component
                        :is="area.icon"
                        :size="16"
                        :stroke-width="2.5"
                        class="relative z-10 text-gman-purple-600 sm:w-[18px] sm:h-[18px]"
                      />
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 space-y-1.5 sm:space-y-2">
                    <h5
                      class="text-base sm:text-lg font-bold transition-colors duration-300"
                      :class="
                        index === 1
                          ? 'text-gman-purple-600'
                          : 'text-stone-900 group-hover:text-gman-purple-600'
                      "
                    >
                      {{ area.title }}
                    </h5>

                    <div class="flex items-center gap-2">
                      <div
                        class="h-1 w-12 sm:w-16 rounded-full transition-all duration-500"
                        :class="
                          index === 1
                            ? 'bg-gradient-to-r from-gman-purple-400 via-gman-purple-300 to-gman-gold-400'
                            : 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 group-hover:from-gman-purple-400 group-hover:via-gman-purple-300 group-hover:to-gman-gold-400'
                        "
                      ></div>
                      <div class="flex gap-1">
                        <div
                          class="h-1 w-1 rounded-full bg-gman-purple-300"
                        ></div>
                        <div
                          class="h-1 w-1 rounded-full bg-gman-purple-200"
                        ></div>
                      </div>
                    </div>

                    <p
                      class="text-stone-600 leading-relaxed text-xs sm:text-sm"
                    >
                      {{ area.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Section -->
            <div
              class="pt-6 sm:pt-8 border-t border-stone-200/50"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div
                class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
              >
                <div class="flex-1">
                  <p
                    class="text-xs text-stone-500 uppercase tracking-wider mb-1.5 sm:mb-2"
                  >
                    Ready to make a difference?
                  </p>
                  <p class="text-sm font-semibold text-stone-700">
                    Discover how we're transforming lives
                  </p>
                </div>

                <Button
                  color="purple"
                  variant="solid"
                  :icon-right="ArrowRight"
                  to="/about"
                  class="shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  Award,
  TrendingUp,
  ArrowRight,
  Utensils,
  Stethoscope,
  Users,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Loader2,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const focusAreas = [
  {
    icon: Utensils,
    title: "Free Food Distribution",
    description:
      "Providing nutritious meals and food packages to families in underserved communities across Nigeria.",
  },
  {
    icon: Stethoscope,
    title: "Medical Outreach",
    description:
      "Delivering essential healthcare services and medical aid to vulnerable aged individuals and communities.",
  },
  {
    icon: Users,
    title: "Empowerment Schemes",
    description:
      "Creating diverse opportunities for women and children, including scholarships and business support.",
  },
];

const videoSrc =
  "https://res.cloudinary.com/djx1l202c/video/upload/v1768869919/w8mrgqtndc7xm9wvdsr8.mp4";
const videoPoster = "/assets/images/about.jpg";

const videoRef = ref(null);
const isPlaying = ref(false);
const isMuted = ref(true); // Start muted for better UX
const videoLoaded = ref(false);

const handleVideoLoaded = () => {
  videoLoaded.value = true;
  // Set initial volume
  if (videoRef.value) {
    videoRef.value.volume = 0.7; // 70% volume
    videoRef.value.muted = true; // Start muted
  }
};

const handleVideoEnded = () => {
  if (videoRef.value) {
    videoRef.value.currentTime = 0;
    videoRef.value.play().catch((err) => {
      console.log("Auto-replay failed:", err);
    });
  }
};

const handleVideoPause = () => {
  isPlaying.value = false;
};

const handleVideoPlay = () => {
  isPlaying.value = true;
};

const handleVolumeChange = () => {
  if (videoRef.value) {
    isMuted.value = videoRef.value.muted;
  }
};

const togglePlay = async () => {
  if (!videoRef.value) return;

  try {
    if (videoRef.value.paused) {
      await videoRef.value.play();
    } else {
      videoRef.value.pause();
    }
  } catch (error) {
    console.error("Video playback error:", error);
  }
};

const toggleMute = () => {
  if (!videoRef.value) return;
  videoRef.value.muted = !videoRef.value.muted;
  isMuted.value = videoRef.value.muted;
};

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.load();
  }
});

onBeforeUnmount(() => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
});
</script>

<style scoped>
video {
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
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
