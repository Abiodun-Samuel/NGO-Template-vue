<template>
  <div>
    <PageHero
      badge="We're Here to Help"
      title="Get in {{Touch}}"
      description="Have a question or want to learn more about our mission? We'd love to hear from you. Reach out and let's make a difference together."
      :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Contact' }]"
      :buttons="[
        {
          label: 'Send Message',
          color: 'gold',
          variant: 'solid',
          onClick: scrollToForm,
          iconRight: ArrowRight,
        },
      ]"
      height="compact"
      :show-scroll-indicator="true"
    />
  </div>
  <Contact />
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
import PageHero from "@/components/pages/PageHero.vue";
import Contact from "../components/pages/Contact.vue";

const scrollToForm = () => {
  const form = document.querySelector("#contact-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
