<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'bg-white shadow py-1' : 'bg-white/95 backdrop-blur-md py-2',
    ]"
  >
    <div class="container mx-auto px-4 lg:px-0 py-1">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NavLogo :isScrolled="isScrolled" @click="setActiveItem('Home')" />

        <!-- Desktop Menu -->
        <div class="flex items-center gap-6">
          <DesktopMenu
            :menu-items="menuItems"
            :active-item="activeItem"
            @set-active="setActiveItem"
          />

          <!-- Get Involved CTA -->
          <GetInvolvedButton
            :active="activeItem === 'Get Involved'"
            @click="setActiveItem('Get Involved')"
          />
        </div>

        <!-- Mobile Menu Button -->
        <MobileMenuButton
          :is-open="isMobileMenuOpen"
          @toggle="toggleMobileMenu"
        />
      </div>
    </div>
    <!-- Mobile Menu -->
    <MobileMenu
      v-if="isMobileMenuOpen"
      :menu-items="menuItems"
      :active-item="activeItem"
      @set-active="handleMobileItemClick"
    />
  </nav>
  <div class="h-20"></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  Home,
  Info,
  Image,
  Users,
  Mail,
  Newspaper,
  BuildingIcon,
  BookOpen,
} from "lucide-vue-next";
import NavLogo from "./NavLogo.vue";
import DesktopMenu from "./DesktopMenu.vue";
import GetInvolvedButton from "./GetInvolvedButton.vue";
import MobileMenu from "./MobileMenu.vue";
import MobileMenuButton from "./MobileMenuButton.vue";

const menuItems = [
  { name: "Home", path: "/", icon: Home, external: false },
  { name: "About Us", path: "/about", icon: Info, external: false },
  { name: "Gallery", path: "/gallery", icon: Image, external: false },
  { name: "Contact", path: "/contact", icon: Mail, external: false },
  {
    name: "Latest News",
    path: "/latest-news",
    icon: Newspaper,
    external: false,
  },
  {
    name: "Blog",
    path: "https://thegloriouschurchinternational.wordpress.com/",
    icon: BookOpen,
    external: true,
  },
];

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeItem = ref("Home");

const getInvolvedItem = {
  name: "Get Involved",
  path: "/get-involved",
  icon: Users,
  isCTA: true,
};

const allMenuItems = computed(() => [...menuItems, getInvolvedItem]);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "unset";
};

const setActiveItem = (itemName) => {
  activeItem.value = itemName;
};

const handleMobileItemClick = (itemName) => {
  setActiveItem(itemName);
  toggleMobileMenu();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "unset";
});
</script>
