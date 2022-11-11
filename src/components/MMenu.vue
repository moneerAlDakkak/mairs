<template>
  <div
    @click.self="hide()"
    v-if="shown"
    :class="`MMENU ${blurred ? 'm-blurred' : ''}`"
  >
    <ul ref="menu" :style="`top: ${clientY}px; left: ${clientX}px`">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MMenu",
  props: {
    blurred: Boolean,
  },
  data() {
    return {
      shown: true,
      menuWidth: 0,
      clientX: 0,
      clientY: -10000000,
    };
  },
  mounted() {
    this.menuWidth = this.$refs.menu.offsetWidth;
    this.shown = false;
  },
  methods: {
    show(e) {
      if (e.clientX + this.menuWidth >= window.innerWidth) {
        this.clientX = e.clientX - this.menuWidth;
      } else {
        this.clientX = e.clientX;
      }
      this.clientY = e.clientY;
      this.shown = true;
    },
    hide() {
      this.shown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../sass" as *;

div.MMENU {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.m-blurred {
    backdrop-filter: blur(6px);
    background: rgba(0, 0, 0, 0.4);
  }
  ul {
    box-shadow: 0 0 2px 0 m-adjust-color("text", $alpha: -0.8);
    display: flex;
    flex-flow: column nowrap;
    gap: 1px;
    background-color: $color_main;
    list-style: none;
    position: fixed;
    color: $color_text;
    margin: 0;
    padding: 0;
    border-radius: min($ui_radius, 20px);
    overflow: hidden;
  }
}
</style>
