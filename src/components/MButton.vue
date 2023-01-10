<template>
  <button :class="[classes, statusClass].join(' ')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import status from "./mixins/status";
export default {
  name: "MButton",
  mixins: [status],
};
</script>

<script lang="ts" setup>
import { computed, withDefaults } from "vue";
// Define Props
const props = withDefaults(
  defineProps<{
    bordered?: boolean;
    rounded?: boolean;
    noStyle?: boolean;
    // Define statusProps
    safe?: boolean;
    warning?: boolean;
    danger?: boolean;
  }>(),
  {}
);

// Manage classes
const statusClass = computed(() => {
  let status = "";
  if (props.safe) status = "m-safe";
  if (props.warning) status = "m-warning";
  if (props.danger) status = "m-danger";
  return status;
});

const classes = computed(() => {
  let types = ["MBUTTON"];
  if (props.bordered) {
    types.push("m-bordered");
  }
  if (props.rounded) {
    types.push("m-rounded");
  }
  if (props.noStyle) {
    types.push("m-no-style");
  }
  return types.join(" ");
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;

button.MBUTTON {
  font-weight: bold;
  font-family: inherit;
  border: none;
  outline: none;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  // gap: 8px;
  gap: m-ui-grid(0.5);
  // padding: 8px 14px;
  padding: m-ui-grid(0.5) m-ui-grid(1);
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
    padding: m-ui-grid(0.5, -1px) m-ui-grid(1, -1px);
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
  &.m-no-style {
    background-color: transparent;
    color: $color_text;
    padding: 0;
    &:hover {
      background: transparent;
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
}
</style>
