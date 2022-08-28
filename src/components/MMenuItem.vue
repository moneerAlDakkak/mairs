<template>
  <li :class="`MMENUITEM`" ref="li" @click="hideOnClickMethod">
    <i v-if="iconStart" :class="iconStart"></i>
    <slot></slot>
    <i v-if="iconEnd" :class="iconEnd"></i>
  </li>
</template>

<script>
export default {
  name: "MMenuItem",
  props: {
    iconStart: String,
    iconEnd: String,
    noHide: {
      type: Boolean,
      default: false,
    },
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
@use "../m" as *;

li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: $color_text;
  margin: 2px 0;
  padding: 10px;
  font-size: 0.9em;
  white-space: pre;
  &:not(&:last-of-type) {
    border-bottom: 1px solid m-change-opacity("text", -0.94);
  }
}
</style>
