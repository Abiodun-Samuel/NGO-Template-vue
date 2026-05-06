<template>
  <div>
    <PageHero
      badge="Our Journey in Pictures"
      title="Moments of {{Impact}} & Hope"
      description="Welcome to our Event Highlights Gallery, a showcase of moments from our events. Through these pictures, you'll witness the joy, dedication, and impact created by our community's collective effort."
      :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Gallery' }]"
      :stats="[
        { value: '500+', label: 'Photos' },
        { value: '50+', label: 'Events' },
        { value: '15+', label: 'Communities' },
      ]"
      :buttons="[
        {
          label: 'Explore Gallery',
          color: 'gold',
          variant: 'solid',
          onClick: scrollToGallery,
          iconRight: ArrowDown,
        },
      ]"
      height="default"
      :show-scroll-indicator="true"
    />
  </div>
  <Gallery />
</template>

<script setup>
import PageHero from "@/components/pages/PageHero.vue";
import Gallery from "../components/pages/Gallery.vue";

const scrollToGallery = () => {
  const gallery = document.querySelector("#gallery-grid");
  if (gallery) {
    gallery.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
