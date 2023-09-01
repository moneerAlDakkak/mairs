<template>
  <dialog
    @click.self="close()"
    :class="{
      MMENU: !unstyled,
      'm-hiding': isHiding,
    }"
    v-show="isOpen"
    ref="MMENU"
    :style="{ top: `${clientY}px`, left: `${clientX}px` }"
  >
    <Teleport to="body">
      <div v-show="isOpen" class="m-overlay" @click="close()"></div>
    </Teleport>

    <div>
      <slot></slot>
    </div>
  </dialog>
</template>

<script lang="ts">
export default {
  name: "MMenu",
};
</script>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps<{ unstyled?: boolean }>();

const isOpen = ref(true);
const isHiding = ref(false);
const clientX = ref(-99999999);
const clientY = ref(-99999999);
const menuWidth = ref(0);
const menuHeight = ref(0);
const MMENU = ref<HTMLDialogElement>();
let observer: MutationObserver;

onMounted(() => {
  MMENU.value?.show();
  setTimeout(() => {
    menuWidth.value = Math.trunc(
      MMENU.value?.getBoundingClientRect().width || 0
    );
    menuHeight.value = Math.trunc(
      MMENU.value?.getBoundingClientRect().height || 0
    );
    isOpen.value = false;
  }, 1000);

  observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "open") {
        isOpen.value = MMENU.value?.hasAttribute("open") || false;
      }
    }
  });
  if (MMENU.value) observer.observe(MMENU.value, { attributes: true });
});

onUnmounted(() => {
  observer.disconnect();
});

// Component methods:
function show(e: MouseEvent) {
  // Determine x location
  if (e.clientX + menuWidth.value >= window.innerWidth) {
    clientX.value = e.clientX - menuWidth.value;
  } else {
    clientX.value = e.clientX;
  }
  // Determine Y location
  if (e.clientY + menuHeight.value >= window.innerHeight) {
    clientY.value = e.clientY - menuHeight.value;
  } else {
    clientY.value = e.clientY;
  }
  MMENU.value?.show();
  isOpen.value = true;
}
function close() {
  isHiding.value = true;
  if (MMENU.value) MMENU.value.open = false;
  setTimeout(() => {
    if (MMENU.value) MMENU.value.open = true;
    MMENU.value?.close();
    isHiding.value = false;
  }, 500);
}

defineExpose({
  show,
  close,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
dialog {
  position: fixed;
  margin: 0;
  z-index: 99;
  &.MMENU {
    max-width: 100%;
    background-color: $color_main;
    color: $color_text;
    border-radius: min($ui_radius, 20px);
    overflow: hidden;
    outline: none;
    border: none;
    padding: 0;
    display: block;
    inset: 0;
    z-index: 99;
    inset-inline-start: unset;
    inset-inline-end: unset;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);

    &:deep(ul) {
      margin: 0;
      padding: 0;
      li {
        padding: 0.5rem 1rem;
        transition: background-color 0.2s ease;
        &:not(:first-of-type) {
          border: 1px solid m-change-color("text", $alpha: 0.1);
        }
        &:hover {
          background-color: m-change-color("text", $alpha: 0.1);
        }
      }
    }
  }
}
</style>

<style lang="scss">
// overlay styles
div.m-overlay {
  position: fixed;
  inset: 0;
  z-index: 98;
}
</style>
