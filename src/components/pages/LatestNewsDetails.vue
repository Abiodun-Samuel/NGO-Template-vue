<template>
  <div class="blog-detail-page">
    <!-- Hero Section -->
    <section
      class="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-stone-900 via-gman-purple-900 to-stone-900 overflow-hidden"
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

      <!-- Floating Orbs -->
      <div class="absolute inset-0">
        <div
          class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gman-gold-400 rounded-full opacity-15 blur-3xl animate-float-slow"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gman-purple-500 rounded-full opacity-15 blur-3xl animate-float-slower"
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Back Link -->
          <div>
            <router-link
              to="/latest-news"
              class="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors duration-200"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <ArrowLeft :size="18" :stroke-width="2" />
              <span class="text-sm font-medium">Back to All News</span>
            </router-link>
          </div>

          <!-- Category Badge -->
          <div
            v-if="post"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gman-purple-600 to-gman-gold-600 rounded-full mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <Newspaper :size="16" class="text-white" :stroke-width="2" />
            <span class="text-sm font-bold text-white">{{
              post.category
            }}</span>
          </div>

          <!-- Title -->
          <h1
            v-if="post"
            class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {{ post.title }}
          </h1>

          <!-- Meta Info -->
          <div
            v-if="post"
            class="flex flex-wrap items-center gap-6 text-white/80"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-br from-gman-gold-400 to-gman-gold-500 flex items-center justify-center"
              >
                <User :size="20" class="text-white" :stroke-width="2" />
              </div>
              <div>
                <div class="text-sm font-semibold text-white">
                  {{ post.author }}
                </div>
                <div class="text-xs text-white/60">CIN Team</div>
              </div>
            </div>

            <div class="h-6 w-px bg-white/20"></div>

            <div class="flex items-center gap-2">
              <Calendar
                :size="18"
                class="text-gman-gold-300"
                :stroke-width="2"
              />
              <span class="text-sm">{{ formatDate(post.date) }}</span>
            </div>

            <div class="flex items-center gap-2">
              <Clock :size="18" class="text-gman-gold-300" :stroke-width="2" />
              <span class="text-sm">{{ post.readTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reading Progress Bar -->
    <div class="sticky top-0 z-50 h-1 bg-stone-200">
      <div
        class="h-full bg-gradient-to-r from-gman-purple-600 to-gman-gold-600 transition-all duration-150"
        :style="{ width: `${readingProgress}%` }"
      ></div>
    </div>

    <!-- Content Section -->
    <section class="relative py-16 sm:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-12 gap-12">
            <!-- Main Content -->
            <article class="lg:col-span-8">
              <!-- Featured Image Placeholder -->
              <div
                class="relative h-96 rounded-3xl overflow-hidden mb-12 bg-stone-100"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <img
                  v-if="post"
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <!-- <div
                  class="absolute inset-0 bg-gradient-to-br from-gman-purple-200 to-gman-gold-200 opacity-40"
                ></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <Newspaper
                    :size="100"
                    class="text-stone-300"
                    :stroke-width="1.5"
                  />
                </div> -->
              </div>

              <!-- Article Content -->
              <div
                v-if="post"
                class="prose prose-lg max-w-none"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                v-html="formattedContent"
              ></div>

              <!-- Tags -->
              <div
                v-if="post && post.tags"
                class="mt-12 pt-8 border-t border-stone-200"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div class="flex flex-wrap items-center gap-3">
                  <span class="text-sm font-semibold text-stone-700"
                    >Tags:</span
                  >
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in post.tags"
                      :key="tag"
                      class="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-full text-xs font-medium text-stone-700 transition-colors duration-200 cursor-pointer"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Share Section -->
              <div
                v-if="post"
                class="mt-8 p-6 bg-gradient-to-r from-gman-purple-50 to-gman-gold-50 rounded-2xl cursor-pointer hover:shadow-md transition-shadow duration-200"
                data-aos="fade-up"
                data-aos-duration="600"
                @click="shareStory"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-12 h-12 rounded-full bg-gradient-to-br from-gman-purple-600 to-gman-gold-600 flex items-center justify-center flex-shrink-0"
                  >
                    <Share2 :size="20" class="text-white" :stroke-width="2" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-stone-900">
                      Share this story
                    </h3>
                    <p class="text-sm text-stone-600">
                      Spread the word about our mission
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <!-- Sidebar -->
            <aside class="lg:col-span-4">
              <!-- Author Card -->
              <div
                v-if="post"
                class="sticky top-24 space-y-8"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <div
                  class="p-6 bg-gradient-to-br from-gman-purple-600 to-gman-gold-600 rounded-2xl text-white"
                >
                  <div class="flex items-center gap-4 mb-4">
                    <div
                      class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <User :size="28" class="text-white" :stroke-width="2" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold">{{ post.author }}</h3>
                      <p class="text-sm text-white/80">CIN Team</p>
                    </div>
                  </div>
                  <p class="text-sm text-white/90 mb-4">
                    Sharing stories of hope, transformation, and community
                    impact across Sample Region.
                  </p>
                  <router-link
                    to="/latest-news"
                    class="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    <span>View all posts</span>
                    <ArrowRight :size="14" :stroke-width="2.5" />
                  </router-link>
                </div>

                <!-- CTA Card -->
                <div
                  class="p-6 bg-stone-50 rounded-2xl border border-stone-200"
                >
                  <div
                    class="w-12 h-12 rounded-xl bg-gradient-to-br from-gman-purple-600 to-gman-gold-600 flex items-center justify-center mb-4"
                  >
                    <Heart :size="24" class="text-white" :stroke-width="2" />
                  </div>
                  <h3 class="text-xl font-bold text-stone-900 mb-2">
                    Support Our Mission
                  </h3>
                  <p class="text-sm text-stone-600 mb-4">
                    Your contribution helps us reach more communities and
                    transform lives.
                  </p>
                  <Button
                    color="gold"
                    variant="solid"
                    :icon-right="ArrowRight"
                    to="/get-involved"
                    class="w-full"
                  >
                    Get Involved
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Posts -->
    <section class="relative py-16 sm:py-20 bg-stone-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div
            class="mb-12 text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4"
            >
              Related Stories
            </h2>
            <p class="text-lg text-stone-600">
              Continue exploring our journey and impact
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <router-link
              v-for="(relatedPost, index) in relatedPosts"
              :key="relatedPost.id"
              :to="`/latest-news/${relatedPost.slug}`"
              class="group relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="600"
              :data-aos-delay="index * 100"
            >
              <!-- Image -->
              <div class="relative h-48 overflow-hidden bg-stone-100">
                <img
                  v-if="relatedPost"
                  :src="relatedPost.image"
                  :alt="relatedPost.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />

                <!-- Category Badge -->
                <div
                  class="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-gman-purple-600 to-gman-gold-600"
                >
                  <span class="text-xs font-semibold text-white">{{
                    relatedPost.category
                  }}</span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5">
                <div class="text-xs text-stone-500 mb-2">
                  {{ formatDate(relatedPost.date) }} •
                  {{ relatedPost.readTime }}
                </div>

                <h3
                  class="text-lg font-bold text-stone-900 mb-2 group-hover:text-gman-purple-600 transition-colors duration-300 line-clamp-2"
                >
                  {{ relatedPost.title }}
                </h3>

                <div
                  class="inline-flex items-center gap-1 text-sm font-semibold text-gman-purple-600 group-hover:gap-2 transition-all duration-300"
                >
                  <span>Read more</span>
                  <ArrowRight :size="14" :stroke-width="2.5" />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Newspaper,
  User,
  Heart,
  Share2,
} from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import { getPostBySlug, getRelatedPosts } from "@/data";

const route = useRoute();
const router = useRouter();

// Reading progress
const readingProgress = ref(0);

// Post data
const post = ref(null);
const relatedPosts = ref([]);

// Load post data based on slug
const loadPost = () => {
  const slug = route.params.slug;
  const foundPost = getPostBySlug(slug);

  if (foundPost) {
    post.value = foundPost;
    relatedPosts.value = getRelatedPosts(foundPost.id);
  } else {
    // Redirect to latest-news if post not found
    router.push("/latest-news");
  }
};

// Format content with paragraphs
const formattedContent = computed(() => {
  if (!post.value) return "";
  return post.value.content
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br>")}</p>`)
    .join("");
});

// Helper functions
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Reading progress tracking
const updateReadingProgress = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const trackLength = documentHeight - windowHeight;
  const progress = Math.floor((scrollTop / trackLength) * 100);
  readingProgress.value = Math.min(progress, 100);
};

// Share function using Web Share API with fallback
const shareStory = async () => {
  if (!post.value) return;

  const shareData = {
    title: post.value.title,
    text: post.value.excerpt,
    url: window.location.href,
  };

  // Check if Web Share API is supported
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      // User cancelled or error occurred
      if (err.name !== "AbortError") {
        console.error("Error sharing:", err);
        fallbackShare();
      }
    }
  } else {
    // Fallback for browsers that don't support Web Share API
    fallbackShare();
  }
};

// Fallback share function - copy link to clipboard
const fallbackShare = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard! Share it with your friends.");
  } catch (err) {
    console.error("Failed to copy link:", err);
    // Final fallback - show the URL
    prompt("Copy this link to share:", window.location.href);
  }
};

// Watch for route changes
watch(
  () => route.params.slug,
  () => {
    loadPost();
    window.scrollTo(0, 0);
  },
);

onMounted(() => {
  loadPost();
  window.addEventListener("scroll", updateReadingProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateReadingProgress);
});
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

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 25s ease-in-out infinite;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Prose Styling */
.prose {
  color: #292524;
  line-height: 1.75;
}

.prose p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.8;
}

.prose p:first-of-type {
  font-size: 1.25rem;
  font-weight: 500;
  color: #57534e;
}

.prose strong {
  font-weight: 600;
  color: #1c1917;
}

.prose a {
  color: #7c3aed;
  text-decoration: underline;
  font-weight: 500;
}

.prose a:hover {
  color: #6d28d9;
}

/* Line clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

html {
  scroll-behavior: smooth;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
