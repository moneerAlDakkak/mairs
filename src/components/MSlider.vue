<template>
  <section
    ref="slider"
    :class="`MSLIDER ${stacked ? 'm-stacked' : ''} ${
      carousel ? 'm-carousel' : ''
    }`"
  >
    <MButton aria-label="slider-previous" @click="previous()"></MButton>
    <div class="MTRACK" ref="track">
      <slot></slot>
    </div>
    <MButton aria-label="slider-next" @click="next()"></MButton>
    <div ref="pointersEl" class="MPOINTERS" v-if="carousel && pointers">
      <span v-for="(a, i) in new Array(childCount)" @click="goTo(i)"></span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUpdated, onUnmounted } from "vue";
import MButton from "../components/MButton.vue";

const props = defineProps<{
  carousel?: boolean;
  infinite?: boolean;
  stacked?: boolean;
  changeTime?: number;
  pointers?: boolean;
}>();

const currentShown = ref(0);
const childCount = ref(0);
const slider = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);
const pointersEl = ref<HTMLElement | null>(null);

function goTo(n: number) {
  if ((n < childCount.value && n > 0) || props.infinite) {
    currentShown.value = n;
  }
}

function next() {
  if (!props.carousel) return;
  if (currentShown.value < childCount.value || props.infinite)
    currentShown.value++;
}

function previous() {
  if (!props.carousel) return;
  if (currentShown.value > 0 || props.infinite) currentShown.value--;
}

watch(currentShown, (newShown) => setPositions(newShown));

function setPositions(newShown: number) {
  // Remove old classes
  track.value
    ?.querySelector(".m-shown-slide")
    ?.classList.remove("m-shown-slide");
  track.value
    ?.querySelector(".m-previous-slide")
    ?.classList.remove("m-previous-slide");
  track.value?.querySelector(".m-next-slide")?.classList.remove("m-next-slide");
  // Add new classes
  track.value?.children[circularIndex(newShown - 1)]?.classList.add(
    "m-previous-slide"
  );
  track.value?.children[circularIndex(newShown + 1)]?.classList.add(
    "m-next-slide"
  );
  track.value?.children[circularIndex(newShown)]?.classList.add(
    "m-shown-slide"
  );
  // Pointers classes
  pointersEl.value?.querySelector(".m-active")?.classList.remove("m-active");
  pointersEl.value?.children[circularIndex(newShown)]?.classList.add(
    "m-active"
  );
}

function circularIndex(i: number): number {
  return ((i % childCount.value) + childCount.value) % childCount.value;
}

const interval = ref<NodeJS.Timeout | null>(null);
onMounted(() => {
  childCount.value = track.value?.childElementCount || 0;
  if (props.carousel) setPositions(0);
  if (props.changeTime && props.carousel) {
    interval.value = setInterval(next, props.changeTime);
  }
});
onUpdated(() => {
  childCount.value = track.value?.childElementCount || 0;
  if (props.carousel) setPositions(0);
});
onUnmounted(() => {
  interval.value = null;
});

defineExpose({
  goTo,
  next,
  previous,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
.MSLIDER {
  // Normal Slider
  .MTRACK {
    display: flex;
    overflow: auto;
    gap: m-ui-grid(0.5);
    padding: m-ui-grid(1) 0;
    scroll-behavior: smooth;
    transform-style: preserve-3d;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    :deep(> *) {
      scroll-snap-stop: always;
      scroll-snap-align: center;
      height: 100%;
      max-width: 100%;
    }
  }
  // Stacked Slider
  &.m-carousel {
    perspective: 1000px;
    overflow: hidden;
    --xstep: 100%;
    --zstep: 2px;
    &.m-stacked {
      display: grid;
      grid-template-columns: 10% 80% 10%;
      --xstep: 30%;
      --zstep: -100px;
      .MTRACK {
        overflow: visible;
      }
    }
    .MTRACK {
      overflow: visible;
      position: relative;
      padding: 0;
      :deep(> *) {
        width: 100% !important;
        max-width: none !important;
        &.m-shown-slide {
          position: relative;
          z-index: 1;
          --xstep: 0;
          --zstep: 0;
        }
        &:not(.m-shown-slide) {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate3d(0, 0, -400px);
        }
        &.m-previous-slide {
          &:is([dir="ltr"] .m-previous-slide) {
            transform: translate3d(calc(-1 * var(--xstep)), 0, var(--zstep));
          }
          &:is([dir="rtl"] .m-previous-slide) {
            transform: translate3d(var(--xstep), 0, var(--zstep));
          }
        }
        &.m-next-slide {
          &:is([dir="ltr"] .m-next-slide) {
            transform: translate3d(var(--xstep), 0, var(--zstep));
          }
          &:is([dir="rtl"] .m-next-slide) {
            transform: translate3d(calc(-1 * var(--xstep)), 0, var(--zstep));
          }
        }
      }
    }
  }
  .MPOINTERS {
    width: 100%;
    grid-column: span 3;
    padding: m-ui-grid();
    display: flex;
    gap: m-ui-grid();
    &:not(.m-carousel .MPOINTERS) {
      display: none;
    }
    span {
      width: 10px;
      height: 10px;
      background-color: $color_text;
      opacity: 0.2;
      border-radius: 50%;
      transition: opacity 0.2s ease;
      &.m-active {
        opacity: 1;
      }
    }
  }
  .MBUTTON {
    &:not(.m-stacked .MBUTTON) {
      display: none;
    }
    display: block;
    width: 100% !important;
    height: 100%;
    z-index: 3;
    background-color: $color_box;
    opacity: 0;
    &:hover {
      transform: none;
      background-color: $color_box;
    }
  }
}
</style>
