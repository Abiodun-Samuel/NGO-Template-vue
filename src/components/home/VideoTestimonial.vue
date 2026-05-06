<template>
  <!-- Video Testimonial Section -->
  <section
    class="relative py-20 rounded sm:py-28 bg-gradient-to-br from-stone-900 via-gman-purple-900 to-stone-900 overflow-hidden"
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

    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <!-- Primary floating orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-gman-gold-400 rounded-full opacity-10 blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gman-purple-500 rounded-full opacity-10 blur-3xl animate-float-slower"
      ></div>

      <!-- Additional accent orbs -->
      <div
        class="absolute top-1/2 right-1/3 w-72 h-72 bg-gman-gold-300 rounded-full opacity-5 blur-3xl animate-float-medium"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/2 w-80 h-80 bg-gman-purple-400 rounded-full opacity-8 blur-3xl animate-float-reverse"
      ></div>

      <!-- Corner accent orbs -->
      <div
        class="absolute top-10 right-10 w-64 h-64 bg-gman-gold-500 rounded-full opacity-6 blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-10 left-10 w-56 h-56 bg-gman-purple-600 rounded-full opacity-7 blur-3xl animate-pulse-slower"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Video Side -->
        <div class="relative" data-aos="fade-right" data-aos-duration="1000">
          <!-- Video Container -->
          <div
            class="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group"
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
                <p class="text-stone-600 text-sm">Loading testimonial...</p>
              </div>
            </div>

            <!-- Video Element -->
            <video
              ref="videoRef"
              :class="{ 'opacity-0': !videoLoaded, 'opacity-100': videoLoaded }"
              class="w-full aspect-video object-cover transition-opacity duration-500"
              playsinline
              preload="auto"
              :poster="videoPoster"
              @loadeddata="handleVideoLoaded"
              @click="togglePlay"
              @ended="handleVideoEnded"
              @pause="handleVideoPause"
              @play="handleVideoPlay"
            >
              <source :src="videoSrc" type="video/mp4" />
              <img
                :src="videoPoster"
                alt="Community testimonial"
                class="w-full h-full object-cover"
              />
            </video>

            <!-- Overlay when paused -->
            <div
              v-if="videoLoaded && !isPlaying"
              class="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300"
            ></div>

            <!-- Play/Pause Button -->
            <button
              v-if="videoLoaded"
              @click="togglePlay"
              class="absolute inset-0 flex items-center justify-center cursor-pointer"
              aria-label="Toggle video playback"
            >
              <div
                v-if="!isPlaying"
                class="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <Play
                  :size="28"
                  class="text-gman-purple-600 ml-1 sm:w-8 sm:h-8"
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
          </div>
        </div>

        <!-- Content Side -->
        <div
          class="text-white flex flex-col justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p
            class="text-sm font-semibold text-gman-gold-300 uppercase tracking-wider mb-3"
          >
            Testimonial
          </p>
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            "Serving others is the melody of kindness"
          </h2>
          <blockquote
            class="text-base sm:text-lg text-stone-300 leading-relaxed"
          >
            Serving others is the melody of kindness that echoes the divine
            call, embodying the verse from Galatians 5:13 'Through love, serve
            one another.' It is a harmonious symphony of compassion in our
            shared journey.
          </blockquote>

          <!-- <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gman-gold-400 to-gman-gold-500 flex items-center justify-center shadow-lg flex-shrink-0"
            >
              <User
                :size="24"
                class="text-white sm:w-7 sm:h-7"
                :stroke-width="2"
              />
            </div>
            <div>
              <div class="font-bold text-white text-base sm:text-lg">
                Community Leader
              </div>
              <div class="text-sm text-stone-400">Lagos, Nigeria</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Play, Volume2, VolumeX, Loader2 } from "lucide-vue-next";

// Video source
const videoSrc =
  "https://res.cloudinary.com/djx1l202c/video/upload/v1768871072/epcghww2j6spqte9q1gu.mp4";
const videoPoster = "/assets/images/testimonial.jpg";

// Video state
const videoRef = ref(null);
const isPlaying = ref(false);
const isMuted = ref(true);
const videoLoaded = ref(false);

// Video event handlers
const handleVideoLoaded = () => {
  videoLoaded.value = true;
  if (videoRef.value) {
    videoRef.value.volume = 0.7;
    videoRef.value.muted = true;
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
/* Floating animations */
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
    opacity: 0.06;
    transform: scale(1);
  }
  50% {
    opacity: 0.12;
    transform: scale(1.1);
  }
}

@keyframes pulse-slower {
  0%,
  100% {
    opacity: 0.07;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
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

video {
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
}

/* Smooth animations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
