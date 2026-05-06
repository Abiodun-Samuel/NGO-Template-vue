<template>
  <section class="relative py-20 sm:py-28">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <header
        class="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <p
          class="text-sm font-semibold text-gman-purple-500 uppercase tracking-wider mb-3"
        >
          Our Gallery
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
        >
          Moments That Matter
        </h2>
        <p class="text-lg text-stone-600 max-w-3xl mx-auto">
          Capturing the impact of our work and the lives we've touched across
          communities
        </p>
      </header>

      <!-- Gallery Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
      >
        <GalleryItem
          v-for="(item, index) in displayedItems"
          :key="item.id"
          :item="item"
          :index="index"
          @click="openLightbox(index)"
        />
      </div>

      <!-- View All Button -->
      <div
        v-if="showViewAll"
        class="text-center mt-16"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Button
          color="purple"
          variant="solid"
          :icon-right="ArrowRight"
          to="/gallery"
        >
          View Complete Gallery
        </Button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Lightbox
      v-if="isLightboxOpen"
      :items="displayedItems"
      :current-index="currentIndex"
      @close="closeLightbox"
      @next="nextImage"
      @previous="previousImage"
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ArrowRight } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import GalleryItem from "@/components/home/gallery/GalleryItem.vue";
import Lightbox from "@/components/home/gallery/Lightbox.vue";
import { GALLERY_ITEMS } from "@/data";

const props = defineProps({
  showViewAll: {
    type: Boolean,
    default: true,
  },
  limit: {
    type: Number,
    default: null,
  },
});

const isLightboxOpen = ref(false);
const currentIndex = ref(0);

const displayedItems = computed(() => {
  return props.limit ? GALLERY_ITEMS.slice(0, props.limit) : GALLERY_ITEMS;
});

const openLightbox = (index) => {
  currentIndex.value = index;
  isLightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  currentIndex.value = 0;
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (currentIndex.value < displayedItems.value.length - 1) {
    currentIndex.value++;
  }
};

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const handleKeydown = (event) => {
  if (!isLightboxOpen.value) return;

  switch (event.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowRight":
      nextImage();
      break;
    case "ArrowLeft":
      previousImage();
      break;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>
