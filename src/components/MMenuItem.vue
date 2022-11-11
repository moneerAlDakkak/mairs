<template>
  <li :class="`MMENUITEM ${statusClass}`" ref="li" @click="hideOnClickMethod">
    <slot></slot>
  </li>
</template>

<script>
import status from "../mixins/status";
export default {
  name: "MMenuItem",
  mixins: [status],
  props: {
    noHide: Boolean,
  },
  methods: {
    hideOnClickMethod() {
      if (!this.noHide) {
        this.$parent.hide();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../sass" as *;

li {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 10px;
  color: $color_text;
  padding: 14px;
  white-space: pre;
  min-width: 200px;
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
