<template>
  <div class="app-container">
    <Header />
    <main class="content-wrapper">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/footer/Footer.vue";
import Header from "./components/header/Header.vue";
</script>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
