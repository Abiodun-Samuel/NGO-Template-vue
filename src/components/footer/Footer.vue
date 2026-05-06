<!-- AppFooter.vue -->
<template>
  <footer class="bg-stone-900 text-white relative">
    <!-- Back to Top Button -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gman-gold-400 hover:bg-gman-gold-300 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gman-gold-200 focus:ring-offset-2 focus:ring-offset-stone-900 group"
      aria-label="Back to top"
    >
      <ArrowUp
        class="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform duration-300"
        :stroke-width="2.5"
      />
    </button>

    <!-- Decorative Top Border -->
    <div
      class="h-1 bg-gradient-to-r from-gman-purple-500 via-gman-gold-400 to-gman-purple-500"
    ></div>

    <!-- Main Footer Content -->
    <div class="relative">
      <!-- Subtle Background Pattern -->
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

      <div class="container mx-auto px-4 lg:px-0 py-16 lg:py-20 relative z-10">
        <div
          data-aos="fade-up"
          class="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12"
        >
          <!-- Brand / Identity -->
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <router-link to="/" class="relative cursor-pointer">
                <img
                  src="/assets/images/logo/logo.jpg"
                  alt="Glorious Mission Aid Network Logo"
                  class="h-14 w-auto rounded"
                />
              </router-link>
            </div>

            <p class="text-sm leading-relaxed text-stone-300">
              The Glorious Mission Aid Network (GMAN) is the Mission and
              Outreach arm of The Glorious Church Int'l. Our mandate is to meet
              the pressing needs of the impoverished and most vulnerable in our
              society with dignity, compassion, and lasting impact.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3
              class="text-sm font-bold text-white mb-6 uppercase tracking-wider"
            >
              Quick Links
            </h3>
            <ul class="space-y-3 text-sm">
              <li>
                <router-link to="/" class="footer-link group">
                  <span class="inline-flex items-center gap-2">
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-gman-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    ></span>
                    Home
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="footer-link group">
                  <span class="inline-flex items-center gap-2">
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-gman-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    ></span>
                    About Us
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/gallery" class="footer-link group">
                  <span class="inline-flex items-center gap-2">
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-gman-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    ></span>
                    Gallery
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/get-involved" class="footer-link group">
                  <span class="inline-flex items-center gap-2">
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-gman-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    ></span>
                    Get Involved
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/latest-news" class="footer-link group">
                  <span class="inline-flex items-center gap-2">
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-gman-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    ></span>
                    Blog
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="footer-link group">
                  <span class="inline-flex items-center gap-2">
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-gman-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    ></span>
                    Contact
                  </span>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Donate / Bank Details -->
          <div class="space-y-4">
            <h3
              class="text-sm font-bold text-white mb-6 uppercase tracking-wider"
            >
              Support the Mission
            </h3>

            <div
              class="rounded-xl bg-stone-800/50 p-5 border border-stone-700/50"
            >
              <p class="text-xs text-stone-300 mb-5 leading-relaxed">
                Your donations make a real difference in communities across
                Nigeria.
              </p>

              <dl class="space-y-3 text-sm">
                <div
                  class="flex items-start justify-between gap-3 pb-3 border-b border-stone-700/50"
                >
                  <dt class="text-stone-400 text-xs">Account Name</dt>
                  <dd class="text-right font-medium text-stone-200 text-xs">
                    Glorious Mission Aid Network
                  </dd>
                </div>
                <div
                  class="flex items-start justify-between gap-3 pb-3 border-b border-stone-700/50"
                >
                  <dt class="text-stone-400 text-xs">Account Number</dt>
                  <dd class="text-right font-bold text-gman-gold-300">
                    1224220999
                  </dd>
                </div>
                <div class="flex items-start justify-between gap-3">
                  <dt class="text-stone-400 text-xs">Bank</dt>
                  <dd class="text-right font-medium text-stone-200 text-xs">
                    Zenith Bank Nigeria
                  </dd>
                </div>
              </dl>

              <router-link
                to="/get-involved"
                class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gman-gold-400 to-gman-gold-500 px-4 py-2.5 text-sm font-bold text-stone-900 shadow-md transition-all hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gman-gold-300 focus:ring-offset-2 focus:ring-offset-stone-900"
              >
                <Heart class="w-4 h-4" :stroke-width="2.5" />
                Donate Now
              </router-link>
            </div>
          </div>

          <!-- Contact -->
          <div class="space-y-6">
            <h3
              class="text-sm font-bold text-white mb-6 uppercase tracking-wider"
            >
              Get in Touch
            </h3>

            <div class="space-y-5">
              <!-- Email -->
              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 rounded-lg bg-gman-gold-400/10 border border-gman-gold-400/30 flex items-center justify-center flex-shrink-0"
                >
                  <Mail class="w-5 h-5 text-gman-gold-400" :stroke-width="2" />
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-xs text-stone-400 mb-1 uppercase tracking-wide"
                  >
                    Email
                  </p>
                  <a
                    :href="`mailto:${email}`"
                    class="footer-link font-medium text-sm block truncate"
                  >
                    {{ email }}
                  </a>
                </div>
              </div>

              <!-- Social Media -->
              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 rounded-lg bg-gman-gold-400/10 border border-gman-gold-400/30 flex items-center justify-center flex-shrink-0"
                >
                  <Share2
                    class="w-5 h-5 text-gman-gold-400"
                    :stroke-width="2"
                  />
                </div>
                <div>
                  <p
                    class="text-xs text-stone-400 mb-3 uppercase tracking-wide"
                  >
                    Follow Us
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-9 h-9 rounded-lg bg-stone-800 hover:bg-gman-gold-400/10 border border-stone-700 hover:border-gman-gold-400/30 flex items-center justify-center transition-all duration-300 group"
                      aria-label="Facebook"
                    >
                      <Facebook
                        class="w-4 h-4 text-stone-400 group-hover:text-gman-gold-400 transition-colors"
                      />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-9 h-9 rounded-lg bg-stone-800 hover:bg-gman-gold-400/10 border border-stone-700 hover:border-gman-gold-400/30 flex items-center justify-center transition-all duration-300 group"
                      aria-label="Instagram"
                    >
                      <Instagram
                        class="w-4 h-4 text-stone-400 group-hover:text-gman-gold-400 transition-colors"
                      />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-9 h-9 rounded-lg bg-stone-800 hover:bg-gman-gold-400/10 border border-stone-700 hover:border-gman-gold-400/30 flex items-center justify-center transition-all duration-300 group"
                      aria-label="YouTube"
                    >
                      <Youtube
                        class="w-4 h-4 text-stone-400 group-hover:text-gman-gold-400 transition-colors"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Contact Button -->
              <router-link
                to="/contact"
                class="inline-flex items-center gap-2 rounded-lg bg-stone-800 hover:bg-stone-700 px-4 py-2.5 text-sm font-semibold text-stone-200 border border-stone-700 hover:border-gman-gold-400/30 transition-all w-full justify-center group"
              >
                <MessageCircle
                  class="w-4 h-4 group-hover:text-gman-gold-400 transition-colors"
                  :stroke-width="2"
                />
                Contact Us
              </router-link>
            </div>
          </div>
        </div>

        <!-- Divider -->

        <div class="border-t border-stone-800 pt-8">
          <div
            class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <p class="text-sm text-stone-400">
              © {{ year }}
              <span class="text-stone-300 font-medium"
                >Glorious Mission Aid Network</span
              >. All rights reserved.
            </p>

            <p class="text-sm text-stone-400">
              Crafted with
              <Heart
                class="w-3.5 h-3.5 inline text-red-500 fill-red-500 mx-1"
              />
              by
              <a
                href="https://abiodunsamuel.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gman-gold-400 hover:text-gman-gold-300 font-semibold transition-colors ml-1"
              >
                Abiodun Digital Hub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Mail,
  Share2,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowUp,
  Heart,
} from "lucide-vue-next";

const email = "gmanglobal23@gmail.com";
const year = new Date().getFullYear();
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.footer-link {
  @apply text-stone-300 transition-colors duration-300 hover:text-gman-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gman-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 rounded;
}
</style>
