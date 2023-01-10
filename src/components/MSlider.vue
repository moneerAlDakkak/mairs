<template>
  <div
    ref="sliderEl"
    :class="`MSLIDER ${stacked ? 'm-stacked' : ''}`"
    :style="`--child-count: ${child_count}; --current-shown: ${currentShown}`"
    @pointerdown="handleTouch($event)"
    @pointermove="handleTouch($event)"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "MSlider",
};
</script>

<script lang="ts" setup>
import { withDefaults, ref, onMounted, onUpdated, watch } from "vue";
// Define props
const props = withDefaults(
  defineProps<{
    infinite?: boolean;
    stacked?: boolean;
    changeTime?: number;
  }>(),
  {}
);
// Component vars
let child_count = ref(0);
let currentShown = ref(0);
let firstTouch = ref(0);
// template refs
let sliderEl: any = ref(null);

// hooks
onMounted(() => {
  child_count.value = sliderEl.value.childElementCount;
  setPositions(0);
  if (props.changeTime) setInterval(next, props.changeTime);
});
onUpdated(() => {
  child_count.value = sliderEl.value.childElementCount;
});

// Component methods
function circularIndex(i: number): number {
  return ((i % child_count.value) + child_count.value) % child_count.value;
}

function next() {
  if (currentShown.value < child_count.value - 1) {
    currentShown.value++;
  } else if (props.infinite) {
    currentShown.value = 0;
  }
}

function previous() {
  if (currentShown.value > 0) {
    currentShown.value--;
  } else if (props.infinite) {
    currentShown.value = child_count.value - 1;
  }
}

function goTo(n: number) {
  currentShown.value = circularIndex(n);
}

function removePositions() {
  for (let i = 0; i < sliderEl.value.children.length; i++) {
    sliderEl.value.children[i].classList.remove(
      "m-active",
      "m-next",
      "m-previous"
    );
  }
}

function setPositions(newShown: number) {
  removePositions();
  if (props.infinite || newShown > 0) {
    sliderEl.value.children[circularIndex(newShown - 1)].classList.add(
      "m-previous"
    );
  }
  sliderEl.value.children[circularIndex(newShown)].classList.add("m-active");
  if (props.infinite || newShown < child_count.value - 1) {
    sliderEl.value.children[circularIndex(newShown + 1)].classList.add(
      "m-next"
    );
  }
}
// function handleScroll(e: any) {
//       if (e.target.style.overflow === "hidden") {
//         if (
//           e.target.scrollLeft ==
//           currentShown.value  * track.firstElementChild.offsetWidth
//         ) {
//           sliderEl.value.style.overflow = "auto";
//         }
//       } else {
//         // Decide the scroll direction
//         let direction =
//           lastPosition.value > sliderEl.value.scrollLeft
//             ? "backwards"
//             : "forwards";
//         if (direction === "forwards") {
//           next();
//         } else {
//           previous();
//         }
//       }
//       this.lastPosition = this.$refs.sliderEl.value.scrollLeft;
//     }
function handleTouch(e: any) {
  if (e.type === "pointerdown") {
    // Open gate
    firstTouch.value = Math.floor(e.clientX);
  } else if (e.type === "pointermove" && firstTouch.value !== 0.1) {
    let lastTouch = Math.floor(e.clientX);
    if (firstTouch.value > lastTouch) next();
    else if (lastTouch > firstTouch.value) previous();
    // Close gate
    firstTouch.value = 0.1;
  }
}

// watchers
watch(child_count, () => {
  setPositions(0);
});

watch(currentShown, (newShown) => {
  setPositions(newShown);
});

defineExpose({
  next,
  previous,
  goTo,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
.MSLIDER {
  display: inline-block;
  position: relative;
  overflow: hidden;
  scroll-behavior: smooth;
  perspective: 1000px;
  transform-style: preserve-3d;
  position: relative;
  --m-xstep: 100%;
  --m-zstep: 0;
  &.m-stacked {
    --m-xstep: 30%;
    --m-zstep: -100px;
    overflow: visible;
  }
  > * {
    width: 100%;
    transition: transform 0.4s ease, opacity 0.4s ease-in;
  }
  > .m-active {
    position: relative;
    z-index: 1;
  }
  > *:not(.m-active) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, -1000px) scale(0.4);
    &:not(.m-next, .m-previous) {
      opacity: 0;
      z-index: -1;
    }
  }
  > .m-next {
    transform: translate3d(var(--m-xstep), 0, var(--m-zstep));
    z-index: 0;
  }
  > .m-previous {
    transform: translate3d(calc(-1 * var(--m-xstep)), 0, var(--m-zstep));
    z-index: 0;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
