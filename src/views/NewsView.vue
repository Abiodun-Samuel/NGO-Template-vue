<template>
  <div>
    <PageHero
      badge="Stay Updated"
      title="Latest {{News}} & Updates"
      description="Stay informed about our latest missions, impact stories, and community transformations. Discover how your support is making a real difference across Nigeria."
      :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Latest News' }]"
      :buttons="[
        {
          label: 'Browse All Posts',
          color: 'gold',
          variant: 'solid',
          onClick: scrollToPosts,
          iconRight: ArrowRight,
        },
      ]"
      height="compact"
      :show-scroll-indicator="true"
    />

    <LatestNews />
  </div>
</template>

<script setup>
import { Mail, ArrowRight } from "lucide-vue-next";
import PageHero from "@/components/pages/PageHero.vue";
import LatestNews from "../components/pages/LatestNews.vue";

const scrollToPosts = () => {
  const posts = document.querySelector("#latest-news");
  if (posts) {
    posts.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
