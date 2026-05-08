<template>
  <div>
    <PageHero
      badge="Join the Movement"
      title="Be Part of {{Real Change}}"
      description="Every act of kindness creates ripples of hope. Join us in empowering lives and transforming communities across Sample Region."
      :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Get Involved' }]"
      :stats="[
        { value: '5000+', label: 'Lives Touched' },
        { value: '150+', label: 'Outreach Events' },
        { value: '50+', label: 'Communities' },
      ]"
      :buttons="[
        {
          label: 'Explore Ways to Help',
          color: 'gold',
          variant: 'solid',
          onClick: scrollToWays,
          iconRight: ArrowRight,
        },
        {
          label: 'Donate Now',
          color: 'purple',
          variant: 'outline',
          onClick: scrollToDonation,
          iconLeft: Heart,
          class:
            'bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30 text-white',
        },
      ]"
      height="default"
      :show-scroll-indicator="true"
    />
  </div>
  <GetInvolved />
</template>

<script setup>
import PageHero from "@/components/pages/PageHero.vue";
import GetInvolved from "../components/pages/GetInvolved.vue";
import { Heart, ArrowRight } from "lucide-vue-next";

const scrollToWays = () => {
  const ways = document.querySelector("#ways-to-help");
  if (ways) {
    ways.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const scrollToDonation = () => {
  const donation = document.querySelector("#donation-section");
  if (donation) {
    donation.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
