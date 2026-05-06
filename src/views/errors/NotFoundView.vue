<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gman-purple-50 to-white px-4"
  >
    <div class="max-w-md text-center">
      <div class="text-9xl font-bold text-gman-purple-600 mb-4">404</div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p class="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 bg-gman-purple-600 text-white font-semibold rounded-lg hover:bg-gman-purple-700 transition-colors duration-300"
      >
        <Home class="w-5 h-5" />
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Home } from "lucide-vue-next";
</script>
