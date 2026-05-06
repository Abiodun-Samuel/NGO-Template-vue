<template>
  <div class="min-h-screen container mx-auto">
    <HeroSection />
    <BrandPartners />
    <WhoweareSection />
    <VideoTestimonial />
    <WhatWeDo />
    <ImpactStats />
    <GallerySection :show-view-all="true" :limit="9" />
    <ServingpeopleSection />
    <GetInvolvedSection />
    <BlogSection
      blog-url="https://thegloriouschurchinternational.wordpress.com/"
    />
    <DonationCTA />
  </div>
</template>

<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import BrandPartners from "../components/home/BrandPartners.vue";
import ImpactStats from "../components/home/ImpactStats.vue";
import WhatWeDo from "../components/home/WhatWeDo.vue";
import GetInvolvedSection from "../components/home/GetInvolvedSection.vue";
import DonationCTA from "../components/home/DonationCTA.vue";
import GallerySection from "../components/home/gallery/GallerySection.vue";
import ServingpeopleSection from "../components/home/ServingpeopleSection.vue";
import WhoweareSection from "../components/home/WhoweareSection.vue";
import VideoTestimonial from "../components/home/VideoTestimonial.vue";
import BlogSection from "../components/home/BlogSection.vue";
</script>
