<!-- ImpactStats.vue -->
<template>
  <section
    class="rounded shadow relative py-20 sm:py-28 bg-gradient-to-br from-gman-purple-500 to-gman-purple-700 overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
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

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
        <p
          class="text-sm font-semibold text-gman-gold-300 uppercase tracking-wider mb-3"
        >
          Our Impact
        </p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Making a Real Difference
        </h2>
        <p class="text-lg text-purple-100 max-w-2xl mx-auto">
          Every number represents a life touched, a family helped, a community
          transformed.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
        <StatCard
          v-for="(stat, index) in stats"
          :key="stat.label"
          :stat="stat"
          :index="index"
        />
      </div>

      <!-- Call to Action -->
      <div
        class="text-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <p class="text-lg text-white mb-8 max-w-xl mx-auto font-medium">
          Join us in creating lasting change. Your support helps us reach more
          communities and transform more lives.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <BaseButton
            color="gold"
            variant="solid"
            to="/get-involved"
            :icon-right="ArrowRight"
          >
            Support Our Mission
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
import BaseButton from "@/components/ui/Button.vue";
import StatCard from "@/components/home/StatCard.vue";

const stats = [
  { iconName: "Users", value: "5000+", label: "Lives Impacted" },
  { iconName: "Heart", value: "2500+", label: "Meals Served" },
  { iconName: "MapPin", value: "50+", label: "Communities Reached" },
  { iconName: "Award", value: "15+", label: "Medical Missions" },
];
</script>
