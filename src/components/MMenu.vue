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

<script lang="ts">
export default {
  name: "MMenu",
};
</script>

<script lang="ts" setup>
import { ref, onMounted, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    blurred?: boolean;
  }>(),
  {}
);

const shown = ref(true);
let menuWidth = ref(0);
const clientX = ref(0);
const clientY = ref(-10000000);

let menu = ref({ offsetWidth: 0 });

onMounted(() => {
  menuWidth.value = menu.value.offsetWidth;
  shown.value = false;
});

// Component methods:
function show(e: any) {
  if (e.clientX + menuWidth.value >= window.innerWidth) {
    clientX.value = e.clientX - menuWidth.value;
  } else {
    clientX.value = e.clientX;
  }
  clientY.value = e.clientY;
  shown.value = true;
}
function hide() {
  shown.value = false;
}

defineExpose({
  show,
  hide,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;

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
