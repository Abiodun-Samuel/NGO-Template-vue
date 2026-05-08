<template>
  <!-- Blog Posts Section -->
  <section
    id="latest-news"
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
      <!-- Featured Post (First/Latest) -->
      <div
        v-if="blogPosts.length > 0"
        class="mb-16"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div class="mb-6 flex items-center gap-3">
          <div
            class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gman-purple-600 to-gman-gold-600 rounded-full"
          >
            <Star :size="16" class="text-white" :stroke-width="2" />
            <span class="text-sm font-bold text-white">Featured Story</span>
          </div>
          <div
            class="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent"
          ></div>
        </div>

        <router-link
          :to="`/latest-news/${blogPosts[0].slug}`"
          class="group relative grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow hover:shadow-md transition-all duration-500"
        >
          <!-- Image -->
          <div class="relative h-80 lg:h-full overflow-hidden bg-stone-100">
            <img
              :src="blogPosts[0].image"
              :alt="blogPosts[0].title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            ></div>

            <!-- Category Badge -->
            <div
              class="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-gman-purple-600 to-gman-gold-600 rounded-full shadow-lg"
            >
              <span class="text-sm font-bold text-white">{{
                blogPosts[0].category
              }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 lg:p-10 flex flex-col justify-center">
            <div class="flex items-center gap-4 text-sm text-stone-500 mb-4">
              <div class="flex items-center gap-1.5">
                <Calendar :size="16" :stroke-width="2" />
                <span>{{ formatDate(blogPosts[0].date) }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <Clock :size="16" :stroke-width="2" />
                <span>{{ blogPosts[0].readTime }}</span>
              </div>
            </div>

            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4 group-hover:text-gman-purple-600 transition-colors duration-300"
            >
              {{ blogPosts[0].title }}
            </h2>

            <p class="text-base sm:text-lg text-stone-600 mb-6 line-clamp-3">
              {{ blogPosts[0].excerpt }}
            </p>

            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-br from-gman-purple-500 to-gman-gold-500 flex items-center justify-center"
              >
                <User :size="20" class="text-white" :stroke-width="2" />
              </div>
              <div>
                <div class="text-sm font-semibold text-stone-900">
                  {{ blogPosts[0].author }}
                </div>
                <div class="text-xs text-stone-500">CIN Team</div>
              </div>
            </div>

            <div
              class="inline-flex items-center gap-2 text-sm font-semibold text-gman-purple-600 group-hover:gap-3 transition-all duration-300"
            >
              <span>Read Full Story</span>
              <ArrowRight
                :size="18"
                class="group-hover:translate-x-1 transition-transform duration-300"
                :stroke-width="2.5"
              />
            </div>
          </div>

          <!-- Decorative Corner -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gman-gold-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
        </router-link>
      </div>

      <!-- Regular Posts Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          v-for="(post, index) in blogPosts.slice(1)"
          :key="post.id"
          :to="`/latest-news/${post.slug}`"
          class="group relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-duration="600"
          :data-aos-delay="index * 50"
        >
          <!-- Image -->
          <div class="relative h-56 overflow-hidden bg-stone-100">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            ></div>

            <!-- Category Badge -->
            <div
              class="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg bg-gradient-to-r from-gman-purple-600 to-gman-gold-600"
            >
              <span class="text-xs font-semibold text-white">{{
                post.category
              }}</span>
            </div>

            <!-- Date Badge -->
            <div
              class="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
            >
              <span class="text-xs font-bold text-gman-purple-600">{{
                getDay(post.date)
              }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center gap-3 text-xs text-stone-500 mb-3">
              <div class="flex items-center gap-1">
                <Calendar :size="14" :stroke-width="2" />
                <span>{{ formatDate(post.date) }}</span>
              </div>
              <span>•</span>
              <div class="flex items-center gap-1">
                <Clock :size="14" :stroke-width="2" />
                <span>{{ post.readTime }}</span>
              </div>
            </div>

            <h3
              class="text-lg font-bold text-stone-900 mb-3 group-hover:text-gman-purple-600 transition-colors duration-300 line-clamp-2"
            >
              {{ post.title }}
            </h3>

            <p class="text-sm text-stone-600 mb-4 line-clamp-2">
              {{ post.excerpt }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-gman-purple-500 to-gman-gold-500 flex items-center justify-center"
                >
                  <User :size="14" class="text-white" :stroke-width="2" />
                </div>
                <span class="text-xs font-medium text-stone-700">{{
                  post.author
                }}</span>
              </div>

              <div
                class="flex items-center gap-1 text-gman-purple-600 group-hover:gap-2 transition-all duration-300"
              >
                <span class="text-xs font-semibold">Read</span>
                <ArrowRight
                  :size="14"
                  class="group-hover:translate-x-1 transition-transform duration-300"
                  :stroke-width="2.5"
                />
              </div>
            </div>
          </div>

          <!-- Decorative Corner -->
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gman-gold-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
        </router-link>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
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
          Stay Connected with Our Mission
        </h2>
        <p class="text-lg sm:text-xl text-white/90 mb-8">
          Subscribe to our newsletter and never miss an update on our outreach
          programs and impact stories.
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
            :icon-left="Mail"
            class="border-white text-white hover:bg-white/10"
            to="/contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Calendar, Clock, ArrowRight, Mail, User, Star } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import { newsData } from "@/data";

// Blog posts data
const blogPosts = ref(newsData);

// Helper functions
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getDay = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
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

/* Line clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
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
