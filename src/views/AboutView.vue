<template>
  <!-- Hero Section -->
  <div>
    <PageHero
      badge="Who We Are"
      title="Empowering Lives, {{Transforming}} Communities"
      :description="`The <strong>Glorious Mission Aid Network (GMAN)</strong> is the Mission and Outreach arm of <span class='font-semibold text-gman-gold-300'>The Glorious Church Int'l</span>, dedicated to meeting the needs of the impoverished and vulnerable with dignity and compassion.`"
      :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'About Us' }]"
      :stats="[
        { value: '5000+', label: 'Lives Touched' },
        { value: '150+', label: 'Outreach Events' },
        { value: '50+', label: 'Communities' },
      ]"
      :buttons="[
        {
          label: 'Get Involved',
          color: 'gold',
          variant: 'solid',
          to: '/get-involved',
          iconRight: ArrowRight,
        },
        {
          label: 'Contact Us',
          color: 'purple',
          variant: 'outline',
          to: '/contact',
          iconLeft: Mail,
          class:
            'bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30 text-white',
        },
      ]"
      height="default"
      :show-scroll-indicator="true"
    />
  </div>
  <AboutUs />
</template>

<script setup>
import PageHero from "@/components/pages/PageHero.vue";
import AboutUs from "../components/pages/AboutUs.vue";
import { ArrowRight, Mail } from "lucide-vue-next";
</script>

<style scoped></style>
