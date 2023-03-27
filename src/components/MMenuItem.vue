<template>
  <li :class="`MMENUITEM ${statusClass}`" ref="li" @click="hideOnClickMethod">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import status from "./mixins/status";
export default {
  name: "MMenuItem",
  mixins: [status],
};
</script>

<script lang="ts" setup>
import { withDefaults, getCurrentInstance, computed } from "vue";

const props = withDefaults(
  defineProps<{
    noHide?: boolean;
  }>(),
  {}
);

const listParent = computed(() => getCurrentInstance()?.parent);

function hideOnClickMethod() {
  // TODO: Fix this
  if (!props.noHide) {
    (listParent.value as any)?.hide();
  }
}
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;

li {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  align-content: center;
  // gap: 10px;
  gap: m-ui-grid(0.5);
  color: $color_text;
  // padding: 14px;
  padding: m-ui-grid();
  white-space: pre;
  background-color: $color_box;
  transition: background-color 0.2s ease;
  // &:first-of-type {
  //   border-radius: $ui_radius $ui_radius 0 0;
  // }
  // &:last-of-type {
  //   border-radius: 0 0 $ui_radius $ui_radius;
  // }
  &:hover {
    background: m-contrast("box", 5%);
  }
  &.m-safe {
    color: $color_safe;
  }
  &.m-warning {
    color: $color_warning;
  }
  &.m-danger {
    color: $color_danger;
  }
}
</style>
