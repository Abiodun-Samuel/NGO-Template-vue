<!-- WhatWeDo.vue -->
<template>
  <section class="relative py-20 sm:py-28 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
        <p
          class="text-sm font-semibold text-gman-purple-500 uppercase tracking-wider mb-3"
        >
          What We Do
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4"
        >
          Our Programs
        </h2>
        <p class="text-lg text-stone-600 max-w-3xl mx-auto">
          We empower lives and uplift communities through compassionate outreach
          and sustainable development initiatives.
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProgramCard
          v-for="(program, index) in programs"
          :key="program.title"
          :program="program"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProgramCard from "@/components/home/ProgramCard.vue";
import { Utensils, Stethoscope, GraduationCap } from "lucide-vue-next";

const programs = [
  {
    title: "Food Distribution",
    description:
      "Feeding the needy in underserved communities with nutritious meals and food packages.",
    image: "/assets/images/about4.jpg",
    icon: Utensils,
  },
  {
    title: "Medical Outreach",
    description:
      "Providing essential healthcare services and medical supplies to those in need.",
    image: "/assets/images/about3.jpg",
    icon: Stethoscope,
  },
  {
    title: "Empowerment Programs",
    description:
      "Equipping individuals with skills and resources for sustainable livelihoods.",
    image: "/assets/images/about.jpg",
    icon: GraduationCap,
  },
];
</script>
