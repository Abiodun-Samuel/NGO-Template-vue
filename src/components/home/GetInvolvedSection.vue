<!-- GetInvolvedSection.vue -->
<template>
  <section class="relative py-20 sm:py-28 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
        <p
          class="text-sm font-semibold text-gman-purple-500 uppercase tracking-wider mb-3"
        >
          Join Us
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
        >
          Get Involved
        </h2>
        <p class="text-lg text-stone-600 max-w-2xl mx-auto">
          Every contribution makes a difference. Choose how you'd like to
          support our mission.
        </p>
      </div>

      <!-- Ways to Help Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InvolvementCard
          v-for="(way, index) in waysToHelp"
          :key="way.title"
          :way="way"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import InvolvementCard from "@/components/home/InvolvementCard.vue";
import { Users, Heart, Handshake } from "lucide-vue-next";

const waysToHelp = [
  {
    title: "Volunteer",
    description:
      "Join our team of dedicated volunteers and make a hands-on impact in communities.",
    icon: Users,
    gradient: "linear-gradient(135deg, #5d2b7a 0%, #684078 100%)",
    cta: "Become a Volunteer",
    href: "/volunteer",
  },
  {
    title: "Donate",
    description:
      "Your financial support helps us reach more people and expand our programs.",
    icon: Heart,
    gradient: "linear-gradient(135deg, #caa14d 0%, #b88d3a 100%)",
    cta: "Make a Donation",
    href: "/donate",
  },
  {
    title: "Partner",
    description:
      "Collaborate with us to create sustainable solutions for communities in need.",
    icon: Handshake,
    gradient: "linear-gradient(135deg, #684078 0%, #5d2b7a 100%)",
    cta: "Become a Partner",
    href: "/partner",
  },
];
</script>
