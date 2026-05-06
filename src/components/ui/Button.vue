<template>
  <component
    :is="componentType"
    :to="to"
    :href="href"
    :type="nativeType"
    :disabled="disabled || loading"
    :class="[buttonClasses, widthClass, sizeClass]"
    @click="handleClick"
    class="group relative inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden rounded-full cursor-pointer"
  >
    <!-- Gradient Overlay (Lit Effect) -->
    <span
      class="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      :class="litGradientClass"
    ></span>

    <!-- Background Animation Layer -->
    <span
      v-if="variant === 'solid'"
      class="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform scale-0 group-hover:scale-100 rounded-full"
      :class="hoverBgClass"
    ></span>

    <!-- Content Wrapper -->
    <span class="relative flex items-center justify-center gap-2">
      <!-- Leading Icon -->
      <component
        v-if="iconLeft && !loading"
        :is="iconLeft"
        :size="iconSize"
        :stroke-width="2"
        class="transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
      />

      <!-- Loading Spinner -->
      <component
        v-if="loading"
        :is="Loader2"
        :size="iconSize"
        :stroke-width="2"
        class="animate-spin flex-shrink-0"
      />

      <!-- Button Text -->
      <span
        v-if="$slots.default"
        class="transition-all duration-200 whitespace-nowrap"
        :class="{ 'group-hover:translate-x-0.5': iconRight && !loading }"
      >
        <slot></slot>
      </span>

      <!-- Trailing Icon -->
      <component
        v-if="iconRight && !loading"
        :is="iconRight"
        :size="iconSize"
        :stroke-width="2"
        class="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
      />
    </span>

    <!-- Shine Effect -->
    <span
      v-if="variant === 'solid' && !disabled && !loading"
      class="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out"
    ></span>
  </component>
</template>

<script setup>
import { computed } from "vue";
import { Loader2 } from "lucide-vue-next";

const props = defineProps({
  // Color variants
  color: {
    type: String,
    default: "purple",
    validator: (value) => ["purple", "gold", "gray"].includes(value),
  },
  // Visual variants
  variant: {
    type: String,
    default: "solid",
    validator: (value) => ["solid", "outline"].includes(value),
  },
  // Size variants
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  iconLeft: {
    type: [Object, Function],
    default: null,
  },
  iconRight: {
    type: [Object, Function],
    default: null,
  },
  // States
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // Button behavior
  nativeType: {
    type: String,
    default: "button",
    validator: (value) => ["button", "submit", "reset"].includes(value),
  },
  // Router support
  to: {
    type: [String, Object],
    default: null,
  },
  // Link support
  href: {
    type: String,
    default: null,
  },
  // Full width
  block: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const componentType = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "button";
});

const sizeClass = computed(() => {
  const sizes = {
    sm: "px-4 py-2 text-sm h-10",
    md: "px-6 py-2.5 text-base h-12",
    lg: "px-8 py-3 text-lg h-13",
  };
  return sizes[props.size];
});

const iconSize = computed(() => {
  const sizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };
  return sizes[props.size];
});

const buttonClasses = computed(() => {
  return [colorClasses.value];
});

const colorClasses = computed(() => {
  const variants = {
    purple: {
      solid:
        "bg-gradient-to-r from-gman-purple-500 to-gman-purple-600 text-white hover:shadow-xl hover:shadow-gman-purple-500/40 ",
      outline:
        "border-2 border-gman-purple-500 text-gman-purple-600 hover:bg-gman-purple-50 hover:border-gman-purple-600",
    },
    gold: {
      solid:
        "bg-gradient-to-r from-gman-gold-400 to-gman-gold-500 text-white hover:shadow-xl hover:shadow-gman-gold-400/40 ",
      outline:
        "border-2 border-gman-gold-400 text-gman-gold-600 hover:bg-gman-gold-50 hover:border-gman-gold-500",
    },
    gray: {
      solid:
        "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-xl hover:shadow-gray-500/40 ",
      outline:
        "border-2 border-gray-400 text-gray-700 hover:bg-gray-50 hover:border-gray-500",
    },
  };
  return variants[props.color][props.variant];
});

const hoverBgClass = computed(() => {
  const colors = {
    purple: "bg-gradient-to-r from-gman-purple-600 to-gman-purple-700",
    gold: "bg-gradient-to-r from-gman-gold-500 to-gman-gold-600",
    gray: "bg-gradient-to-r from-gray-700 to-gray-800",
  };
  return colors[props.color];
});

const litGradientClass = computed(() => {
  const gradients = {
    purple:
      "bg-gradient-to-tr from-gman-purple-400/30 via-gman-purple-300/40 to-white/50",
    gold: "bg-gradient-to-tr from-gman-gold-300/30 via-gman-gold-200/40 to-white/50",
    gray: "bg-gradient-to-tr from-gray-500/30 via-gray-400/40 to-white/50",
  };
  return gradients[props.color];
});

const widthClass = computed(() => {
  return props.block ? "w-full" : "";
});

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};
</script>

<style scoped>
/* Smooth transform for better performance */
button,
a {
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Enhanced focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

/* Disabled state improvements */
button:disabled,
a:disabled {
  pointer-events: none;
}

/* Active state */
button:active:not(:disabled),
a:active:not(:disabled) {
  transform: scale(0.98);
}
</style>
