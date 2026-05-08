<template>
  <div class="gallery-page">
    <!-- Gallery Grid Section -->
    <section
      id="gallery-grid"
      class="relative py-16 sm:py-20 bg-[#fafaf9] overflow-hidden"
    >
      <!-- Premium Background -->
      <div class="absolute inset-0">
        <div
          class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/20 via-purple-100/15 to-transparent blur-3xl animate-float-slow"
        ></div>
        <div
          class="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/30 via-yellow-50/20 to-transparent blur-3xl animate-float-medium"
        ></div>
        <div
          class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Gallery Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <button
            v-for="(item, index) in galleryItems"
            :key="item.id"
            @click="openGalleryModal(item)"
            class="group relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-500 hover:-translate-y-2 text-left w-full"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="index * 50"
          >
            <!-- Image Container -->
            <div class="relative h-72 sm:h-80 overflow-hidden bg-stone-100">
              <!-- First image - auto format detection -->
              <img
                :src="getImagePath(item.folder, 1)"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                @error="handleImageError($event, item.folder, 1)"
              />

              <!-- Media count badge -->
              <div
                class="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full shadow-lg z-10"
              >
                <div class="flex items-center gap-1.5">
                  <ImageIcon :size="14" class="text-white" :stroke-width="2" />
                  <span class="text-xs font-bold text-white">{{
                    getTotalMediaCount(item)
                  }}</span>
                </div>
              </div>

              <!-- Video indicator -->
              <div
                v-if="item.videos && item.videos.length > 0"
                class="absolute top-4 left-20 px-3 py-1.5 bg-gman-purple-600 backdrop-blur-sm rounded-full shadow-lg z-10"
              >
                <div class="flex items-center gap-1.5">
                  <Video :size="14" class="text-white" :stroke-width="2" />
                  <span class="text-xs font-bold text-white">{{
                    item.videos.length
                  }}</span>
                </div>
              </div>

              <!-- Hover Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <!-- Year Badge -->
              <div
                v-if="item?.year"
                class="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg z-10"
              >
                <span class="text-xs font-bold text-gman-purple-600">{{
                  item.year
                }}</span>
              </div>

              <!-- View Icon -->
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl z-10"
              >
                <Eye
                  :size="24"
                  class="text-gman-purple-600"
                  :stroke-width="2"
                />
              </div>

              <!-- Category Badge -->
              <div
                class="absolute bottom-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg transition-transform duration-500 group-hover:scale-105 z-10"
                :class="getCategoryStyle(item.category)"
              >
                <div class="flex items-center gap-2">
                  <component
                    :is="getCategoryIcon(item.category)"
                    :size="14"
                    class="text-white"
                    :stroke-width="2"
                  />
                  <span class="text-xs font-semibold text-white">{{
                    item.category
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 sm:p-6">
              <h3
                class="text-lg sm:text-xl font-bold text-stone-900 mb-1 group-hover:text-gman-purple-600 transition-colors duration-300 line-clamp-2"
              >
                {{ item.title }}
              </h3>
              <p class="mb-2" v-if="item.description">{{ item.description }}</p>
              <div
                class="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-4"
              >
                <div v-if="item?.year" class="flex items-center gap-1.5">
                  <Calendar :size="14" :stroke-width="2" />
                  <span>{{ item.year }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <MapPin :size="14" :stroke-width="2" />
                  <span>{{ item.location }}</span>
                </div>
              </div>

              <div
                class="inline-flex items-center gap-2 text-sm font-semibold text-gman-purple-600 group-hover:gap-3 transition-all duration-300"
              >
                <span>View Gallery</span>
                <ArrowRight
                  :size="16"
                  class="group-hover:translate-x-1 transition-transform duration-300"
                  :stroke-width="2.5"
                />
              </div>
            </div>

            <div
              class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gman-gold-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="relative py-16 sm:py-20 bg-gradient-to-r from-gman-purple-600 to-gman-gold-600 overflow-hidden"
    >
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute inset-0"
          style="
            background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M30 0L30 60M0 30L60 30&quot; stroke=&quot;white&quot; stroke-width=&quot;0.5&quot; fill=&quot;none&quot;/%3E%3C/svg%3E');
          "
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Be Part of Our Next Story
          </h2>
          <p class="text-lg sm:text-xl text-white/90 mb-8">
            Join us in creating more moments of impact and hope across
            communities in Sample Region.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              color="gold"
              variant="solid"
              :icon-right="ArrowRight"
              class="bg-white text-gman-purple-600 hover:bg-white/90"
              to="/get-involved"
            >
              Get Involved
            </Button>
            <Button
              color="purple"
              variant="outline"
              :icon-left="Heart"
              class="border-white text-white hover:bg-white/10"
              to="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Modal - REFACTORED -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <!-- HEADER - Fixed at top -->
          <div
            class="flex-shrink-0 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/60 to-transparent"
          >
            <div class="text-white max-w-3xl">
              <h3 class="text-xl sm:text-2xl font-bold mb-2">
                {{ selectedGallery?.title }}
              </h3>
              <p
                v-if="selectedGallery?.description"
                class="text-sm sm:text-base text-white/80 mb-2"
              >
                {{ selectedGallery.description }}
              </p>

              <div
                class="flex flex-wrap items-center gap-3 text-sm text-white/70"
              >
                <div
                  v-if="selectedGallery?.year"
                  class="flex items-center gap-1.5"
                >
                  <Calendar :size="14" :stroke-width="2" />
                  <span>{{ selectedGallery?.year }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <MapPin :size="14" :stroke-width="2" />
                  <span>{{ selectedGallery?.location }}</span>
                </div>
                <div
                  class="px-2.5 py-1 rounded-full text-xs font-semibold"
                  :class="getCategoryStyle(selectedGallery?.category)"
                >
                  {{ selectedGallery?.category }}
                </div>
              </div>
            </div>

            <button
              @click="closeModal"
              class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 ml-4"
              aria-label="Close modal"
            >
              <X :size="24" class="text-white" :stroke-width="2" />
            </button>
          </div>

          <!-- MAIN CONTENT AREA - Flex container -->
          <div class="flex-1 flex flex-col min-h-0 px-4 pb-4">
            <!-- Image/Video Display Container - Fixed aspect ratio container -->
            <div
              class="flex-1 flex items-center justify-center relative min-h-0"
            >
              <!-- Fixed aspect ratio wrapper to prevent jumping -->
              <div
                class="relative w-full h-full flex items-center justify-center"
                style="max-height: calc(100vh - 280px)"
              >
                <!-- Image with object-contain to maintain aspect ratio -->
                <img
                  v-if="currentMedia && currentMedia.type === 'image'"
                  :src="currentMedia.url"
                  :alt="`${selectedGallery.title} - Image ${currentMediaIndex + 1}`"
                  class="max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300"
                  :class="{ 'opacity-0': imageLoading }"
                  @load="imageLoading = false"
                  @loadstart="imageLoading = true"
                  @error="
                    handleImageError(
                      $event,
                      selectedGallery.folder,
                      currentMedia.number,
                    )
                  "
                />

                <!-- Video with object-contain -->
                <video
                  v-else-if="currentMedia && currentMedia.type === 'video'"
                  :src="currentMedia.url"
                  class="max-w-full max-h-full object-contain rounded-lg"
                  controls
                  autoplay
                  playsinline
                  ref="videoRef"
                >
                  Your browser does not support the video tag.
                </video>

                <!-- Loading spinner for images -->
                <div
                  v-if="imageLoading && currentMedia?.type === 'image'"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"
                  ></div>
                </div>

                <!-- Navigation Arrows -->
                <button
                  v-if="currentMediaIndex > 0"
                  @click="previousMedia"
                  class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 z-20"
                  aria-label="Previous media"
                >
                  <ChevronLeft
                    :size="24"
                    class="text-stone-900"
                    :stroke-width="2.5"
                  />
                </button>

                <button
                  v-if="allMedia && currentMediaIndex < allMedia.length - 1"
                  @click="nextMedia"
                  class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 z-20"
                  aria-label="Next media"
                >
                  <ChevronRight
                    :size="24"
                    class="text-stone-900"
                    :stroke-width="2.5"
                  />
                </button>

                <!-- Media Counter - Top Right -->
                <div
                  class="absolute top-2 sm:top-4 right-2 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-semibold z-20"
                >
                  {{ currentMediaIndex + 1 }} / {{ allMedia?.length }}
                </div>

                <!-- Media Type Badge - Top Left -->
                <div
                  v-if="currentMedia"
                  class="absolute top-2 sm:top-4 left-2 sm:left-4 px-3 py-1.5 rounded-full text-xs font-semibold z-20"
                  :class="
                    currentMedia.type === 'video'
                      ? 'bg-gman-purple-600'
                      : 'bg-black/60 backdrop-blur-sm'
                  "
                >
                  <div class="flex items-center gap-1.5">
                    <Video
                      v-if="currentMedia.type === 'video'"
                      :size="14"
                      class="text-white"
                      :stroke-width="2"
                    />
                    <ImageIcon
                      v-else
                      :size="14"
                      class="text-white"
                      :stroke-width="2"
                    />
                    <span class="text-white">{{
                      currentMedia.type === "video" ? "Video" : "Image"
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- THUMBNAIL STRIP - Separated below image, always visible -->
            <div class="flex-shrink-0 mt-4 sm:mt-6">
              <!-- Toggle button for mobile -->
              <button
                @click="thumbnailsVisible = !thumbnailsVisible"
                class="sm:hidden w-full mb-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Grid3x3 :size="16" :stroke-width="2" />
                <span
                  >{{ thumbnailsVisible ? "Hide" : "Show" }} Thumbnails</span
                >
              </button>

              <!-- Thumbnails container -->
              <div
                :class="[
                  'transition-all duration-300',
                  thumbnailsVisible || !isMobile
                    ? 'max-h-32 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden',
                ]"
              >
                <div
                  class="flex gap-2 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30"
                >
                  <button
                    v-for="(media, index) in allMedia"
                    :key="index"
                    @click="goToMedia(index)"
                    class="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all duration-200"
                    :class="
                      currentMediaIndex === index
                        ? 'ring-4 ring-gman-gold-400 scale-105'
                        : 'ring-2 ring-white/30 hover:ring-white/60 opacity-60 hover:opacity-100'
                    "
                  >
                    <!-- Image Thumbnail -->
                    <img
                      v-if="media.type === 'image'"
                      :src="media.url"
                      :alt="`Thumbnail ${index + 1}`"
                      class="w-full h-full object-cover"
                      @error="
                        handleImageError(
                          $event,
                          selectedGallery.folder,
                          media.number,
                        )
                      "
                    />
                    <!-- Video Thumbnail -->
                    <div
                      v-else
                      class="w-full h-full bg-stone-800 flex items-center justify-center"
                    >
                      <Video :size="20" class="text-white" :stroke-width="2" />
                    </div>

                    <div
                      v-if="media.type === 'video'"
                      class="absolute inset-0 bg-gman-purple-600/30 flex items-center justify-center"
                    >
                      <PlayCircle
                        :size="16"
                        class="text-white"
                        :stroke-width="2"
                      />
                    </div>

                    <div
                      v-if="currentMediaIndex === index"
                      class="absolute inset-0 bg-gman-gold-400/20"
                    ></div>
                  </button>
                </div>
              </div>
            </div>

            <!-- FOOTER HINT -->
            <div
              class="flex-shrink-0 mt-3 text-center text-white/50 text-xs sm:text-sm"
            >
              Use arrow keys or click arrows to navigate • Press ESC to close
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Heart,
  ImageIcon,
  Users,
  Stethoscope,
  Sparkles,
  Grid3x3,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Video,
  PlayCircle,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

/**
 * WINDOWS-STYLE FILENAME SYSTEM
 *
 * Filenames follow pattern: "image (1).jpg", "image (2).jpeg", "image (3).png"
 * Format: "image ({number}).{ext}"
 * - number: Sequential number (1, 2, 3...)
 * - ext: jpg, jpeg, or png
 *
 * Examples:
 * - image (1).jpg, image (2).jpeg, image (3).png
 * - image (4).jpg, image (5).jpeg
 * - image (100).png
 */

// Gallery configuration - Just metadata and max image counts!
const galleryItems = ref([
  {
    id: 8,
    title: "PPP Outreach 2025 at The Message Assembly Church Sample District",
    year: 2025,
    category: "Outreach",
    location: "Sample District, Sample City",
    folder: "gman-outreach-2025",
    imageCount: 13,
    videos: [
      "https://res.cloudinary.com/djx1l202c/video/upload/v1768970669/dcbdq7z7qurfhndxofsm.mp4",
      "https://res.cloudinary.com/djx1l202c/video/upload/v1768970642/m6dqwjqrrgijzmm1qwmk.mp4",
    ],
    icon: Users,
  },
  {
    id: 9,
    title: "CIN Outreach Mission at Wuse, Sample City 2025",
    year: 2025,
    category: "Outreach",
    location: "Wuse, Sample City",
    folder: "wuse-outreach-2025",
    imageCount: 52,
    videos: [],
    icon: Users,
  },

  {
    id: 6,
    title:
      "CIN at Sample Care Center Geriatric Care Foundation 2024 - Medical Outreach",
    description: "In memory of Alex Johnson",
    year: 2024,
    category: "Medical",
    location: "Isebo, Ibadan, Oyo State",
    folder: "gman-medical-2024",
    imageCount: 69,
    videos: [],
    icon: Stethoscope,
  },
  {
    id: 7,
    title: "CIN and PPP outreach at Message Assembly Sample District, 2024",
    year: 2024,
    category: "Outreach",
    location: "Sample District, Sample City",
    folder: "gman-outreach-2024",
    imageCount: 56,
    videos: [],
    icon: Users,
  },

  {
    id: 1,
    title: "People of Passion and Purpose Mission at Foursquare Church.",
    year: 2023,
    category: "Mission",
    location: "Ojota, Sample City",
    folder: "ppp-ojota",
    imageCount: 160,
    videos: [],
    icon: Users,
  },
  {
    id: 2,
    title: "Medical Outreach - Sample Care Center Geriatric Care Foundation 2023.",
    year: 2023,
    category: "Medical",
    location: "Isebo, Ibadan, Oyo State",
    folder: "omojolagbe-2023",
    imageCount: 133,
    videos: [],
    icon: Stethoscope,
  },
  {
    id: 3,
    title:
      "CIN & PPP Mission at The Message Assembly Church, Sample District Community, 2023",
    year: 2023,
    category: "Mission",
    location: "Sample District, Sample City",
    folder: "gman-awoyaya-2023",
    imageCount: 69,
    videos: [],
    icon: Users,
  },

  {
    id: 4,
    title:
      "CIN & PPP Mission at The Message Assembly Church, Sample District Community, 2022",
    year: 2022,
    category: "Mission",
    location: "Sample District, Sample City",
    folder: "gman-awoyaya-2022",
    imageCount: 17,
    videos: [],
    icon: Users,
  },

  {
    id: 5,
    title: "CIN at The Message Assembly Church, Sample District Community, 2021",
    year: 2021,
    category: "Mission",
    location: "Sample District, Sample City",
    folder: "gman-awoyaya-2021",
    imageCount: 89,
    videos: [],
    icon: Sparkles,
  },
]);

const IMAGE_BASE_PATH = "/assets/images/gallery";
const IMAGE_FORMATS = ["jpg", "jpeg", "png"]; // Try in this order

/**
 * Generate image path with "image (N)" naming pattern
 * @param {string} folder - Gallery folder name
 * @param {number} number - Image number (1, 2, 3...)
 * @param {string} format - Image format (jpg/jpeg/png) - defaults to jpg
 * @returns {string} - Image path like "/gallery/folder/image (1).jpg"
 */
const getImagePath = (folder, number, format = "jpg") => {
  return `${IMAGE_BASE_PATH}/${folder}/image (${number}).${format}`;
};

/**
 * Handle image load error - try alternative formats
 */
const handleImageError = (event, folder, number) => {
  const img = event.target;
  const currentSrc = img.src;

  // Determine current format
  let currentFormat = null;
  for (const format of IMAGE_FORMATS) {
    if (currentSrc.endsWith(`.${format}`)) {
      currentFormat = format;
      break;
    }
  }

  if (!currentFormat) return;

  // Try next format
  const currentIndex = IMAGE_FORMATS.indexOf(currentFormat);
  const nextIndex = currentIndex + 1;

  if (nextIndex < IMAGE_FORMATS.length) {
    const nextFormat = IMAGE_FORMATS[nextIndex];
    img.src = getImagePath(folder, number, nextFormat);
  }
  // If all formats fail, browser will show broken image
};

/**
 * Get total media count
 */
const getTotalMediaCount = (item) => {
  const videoCount = item.videos ? item.videos.length : 0;
  return item.imageCount + videoCount;
};

/**
 * Build media array for a gallery
 * Pattern: image (1), image (2), image (3)... up to imageCount
 */
const buildMediaArray = (item) => {
  const media = [];

  // Generate image entries from 1 to imageCount
  for (let i = 1; i <= item.imageCount; i++) {
    media.push({
      type: "image",
      url: getImagePath(item.folder, i),
      number: i,
    });
  }

  // Add videos at the end
  if (item.videos && item.videos.length > 0) {
    item.videos.forEach((videoUrl) => {
      media.push({
        type: "video",
        url: videoUrl,
      });
    });
  }

  return media;
};

// Modal state
const isModalOpen = ref(false);
const selectedGallery = ref(null);
const currentMediaIndex = ref(0);
const videoRef = ref(null);
const imageLoading = ref(false);
const thumbnailsVisible = ref(true);
const isMobile = ref(window.innerWidth < 640);

const allMedia = computed(() => {
  if (!selectedGallery.value) return [];
  return buildMediaArray(selectedGallery.value);
});

const currentMedia = computed(() => {
  if (!allMedia.value || allMedia.value.length === 0) return null;
  return allMedia.value[currentMediaIndex.value];
});

// Modal functions
const openGalleryModal = (item) => {
  selectedGallery.value = item;
  currentMediaIndex.value = 0;
  imageLoading.value = true;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
  isModalOpen.value = false;
  selectedGallery.value = null;
  currentMediaIndex.value = 0;
  imageLoading.value = false;
  document.body.style.overflow = "";
};

const nextMedia = () => {
  if (allMedia.value && currentMediaIndex.value < allMedia.value.length - 1) {
    imageLoading.value = true;
    currentMediaIndex.value++;
  }
};

const previousMedia = () => {
  if (currentMediaIndex.value > 0) {
    imageLoading.value = true;
    currentMediaIndex.value--;
  }
};

const goToMedia = (index) => {
  imageLoading.value = true;
  currentMediaIndex.value = index;
};

watch(currentMediaIndex, () => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
});

const handleKeydown = (event) => {
  if (!isModalOpen.value) return;

  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "ArrowRight") {
    nextMedia();
  } else if (event.key === "ArrowLeft") {
    previousMedia();
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("resize", handleResize);
  document.body.style.overflow = "";
});

const getCategoryStyle = (category) => {
  const styles = {
    Medical: "bg-gradient-to-r from-red-500 to-pink-500",
    Mission: "bg-gradient-to-r from-gman-purple-500 to-gman-purple-600",
    Outreach: "bg-gradient-to-r from-gman-gold-400 to-gman-gold-500",
    Others: "bg-gradient-to-r from-blue-500 to-cyan-500",
  };
  return styles[category] || "bg-gradient-to-r from-stone-500 to-stone-600";
};

const getCategoryIcon = (category) => {
  const icons = {
    Medical: Stethoscope,
    Mission: Sparkles,
    Outreach: Users,
    Others: Grid3x3,
  };
  return icons[category] || ImageIcon;
};
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

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}
.animate-float-slower {
  animation: float-slower 25s ease-in-out infinite;
}
.animate-float-medium {
  animation: float-medium 18s ease-in-out infinite;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active > div {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.modal-enter-from > div {
  transform: scale(0.95);
  opacity: 0;
}

/* Custom scrollbar for thumbnails */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thumb-white\/20::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
}

.scrollbar-track-transparent::-webkit-scrollbar-track {
  background-color: transparent;
}

.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

html {
  scroll-behavior: smooth;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
