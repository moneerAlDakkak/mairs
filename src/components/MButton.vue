<template>
  <button :class="classes" @click="goToLink()">
    <i v-if="iconStart" :class="iconStart"></i>
    <slot></slot>
    <i v-if="iconEnd" :class="iconEnd"></i>
  </button>
</template>

<script>
export default {
  name: "MButton",
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    circled: {
      type: Boolean,
      default: false,
    },
    iconStart: {
      type: String,
    },
    iconEnd: {
      type: String,
    },
    to: {
      type: String,
    },
  },
  computed: {
    classes() {
      let types = ["MBUTTON"];
      if (this.bordered) {
        types.push("m-bordered");
      }
      if (this.circled) {
        types.push("m-circled");
      }
      return types.join(" ");
    },
  },
  methods: {
    goToLink() {
      if (this.to) {
        this.$router.push(this.to);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../m" as *;

button {
  font-weight: bold;
  font-family: inherit;
  border: none;
  outline: none;
  text-decoration: none;
  &.MBUTTON {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    border-radius: $ui_radius;
    cursor: pointer;
    transition: all 0.4s ease;
    background-color: $color_accent;
    color: $color_onAccent;
    &:hover {
      background: m-darker("accent", 10%);
      transform: scale(1.04);
    }
    &.m-bordered {
      background-color: transparent;
      color: $color_accent;
      border: 1px solid $color_accent;
      padding: 7px 14px;
      &:hover {
        background: $color_accent;
        color: $color_onAccent;
        transform: scale(1.04);
      }
    }
    &.m-circled {
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: m-change-opacity("text", -0.86);
      color: $color_text;
    }
  }
}
</style>
