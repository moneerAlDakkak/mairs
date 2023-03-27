<template>
  <div
    @click.self="hide()"
    :class="`MMENU ${blurred ? 'm-blurred' : ''}`"
    v-if="shown"
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
import { ref, onMounted, withDefaults, toRaw } from "vue";

const props = withDefaults(
  defineProps<{
    blurred?: boolean;
  }>(),
  {}
);

const shown = ref(true);
const clientX = ref(0);
const clientY = ref(0);
const menuWidth = ref(0);
const zIndex = ref("-10");
const visibility = ref("hidden");

let menu = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    menuWidth.value = menu.value ? menu.value.offsetWidth : 0;
    shown.value = false;
    zIndex.value = "10";
    visibility.value = "visible";
  }, 2000);
});

// Component methods:
function show(e: any) {
  if (zIndex.value === "-10") return;
  shown.value = true;
  if (e.clientX + menuWidth.value >= window.innerWidth) {
    clientX.value = e.clientX - menuWidth.value;
  } else {
    clientX.value = e.clientX;
  }
  clientY.value = e.clientY;
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
  z-index: v-bind(zIndex);
  visibility: v-bind(visibility);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.m-blurred {
    backdrop-filter: blur(6px);
    background: rgba(0, 0, 0, 0.4);
  }
}
ul {
  z-index: 11;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
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
</style>
