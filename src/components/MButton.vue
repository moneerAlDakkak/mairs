<template>
  <button :class="[classes, statusClass].join(' ')">
    <slot></slot>
  </button>
</template>

<script>
import status from "../mixins/status";
export default {
  name: "MButton",
  mixins: [status],
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    noStyle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      let types = ["MBUTTON"];
      if (this.bordered) {
        types.push("m-bordered");
      }
      if (this.rounded) {
        types.push("m-rounded");
      }
      if (this.noStyle) {
        types.push("m-no-style");
      }
      return types.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../sass" as *;

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
  gap: 8px;
  padding: 8px 14px;
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
    padding: 7px 13px;
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
