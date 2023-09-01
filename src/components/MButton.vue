<template>
  <button :class="{ ...statusClasses, ...styleClasses }" :disabled="loading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      v-if="loading"
    >
      <path
        fill="currentColor"
        d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
      />
    </svg>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "MButton",
};
</script>

<script lang="ts" setup>
import { computed, withDefaults } from "vue";
// Define Props
const props = withDefaults(
  defineProps<{
    bordered?: boolean;
    rounded?: boolean;
    // Define statusProps
    safe?: boolean;
    warning?: boolean;
    danger?: boolean;
    loading?: boolean;
    unstyled?: boolean;
  }>(),
  {}
);

// Manage classes
const statusClasses = computed(() => {
  return {
    "m-safe": props.safe,
    "m-warning": props.warning,
    "m-danger": props.danger,
  };
});

const styleClasses = computed(() => {
  return {
    MBUTTON: !props.unstyled,
    "m-bordered": props.bordered,
    "m-rounded": props.rounded,
  };
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;

button.MBUTTON {
  all: unset;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 0.85em;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: $ui_radius;
  cursor: pointer;
  transition: all 0.4s ease;
  background: $color_accent;
  color: $color_onAccent;
  &[disabled] {
    filter: grayscale(100%);
    pointer-events: none;
  }
  &:hover {
    background: m-darken("accent", 10%);
    transform: scale(1.04);
  }
  &.m-bordered {
    background-color: transparent;
    color: $color_accent;
    border: 1px solid $color_accent;
    padding: calc(0.5rem - 1px) calc(1rem - 1px);
    &:hover {
      background: $color_accent;
      color: $color_onAccent;
      transform: scale(1.04);
    }
  }
  &.m-rounded {
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: $color_box;
    color: $color_text;
    &:hover {
      background: m-contrast("box", 10%);
      transform: scale(1.01);
    }
  }
  &.m-safe {
    @include setColor("accent", $color_safe);
  }
  &.m-warning {
    @include setColor("accent", $color_warning);
    @include setColor("onAccent", #111);
  }
  &.m-danger {
    @include setColor("accent", $color_danger);
  }
  svg {
    width: 20px;
    fill: $color_onAccent;
    animation: spin 1.4s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
