<template>
  <details :class="{ MDROP: !unstyled }" ref="detailsEl" :open="open">
    <summary ref="summary" @click.prevent="handleClick">
      <slot name="summary"></slot>
    </summary>
    <section ref="contentEl">
      <slot></slot>
    </section>
  </details>
</template>

<script lang="ts">
export default {
  name: "MDrop",
};
</script>

<script lang="ts" setup>
import { withDefaults, ref } from "vue";
// Define props
const props = withDefaults(
  defineProps<{
    open?: boolean;
    unstyled?: boolean;
  }>(),
  {}
);
// Define variables
let isClosing = ref(false);
let isExpanding = ref(false);
let animation: any = ref(null);

// template refs
let detailsEl: any = ref(null);
let contentEl: any = ref(null);

// Component methods
function handleClick() {
  // Check if the element is being closed or is already closed
  if (isClosing.value || !detailsEl.value.open) {
    openContent();
    // Check if the element is being openned or is already open
  } else if (isExpanding.value || detailsEl.value.open) {
    shrink();
  }
}

function expand() {
  // Set the element as "being expanding"
  isExpanding.value = true;
  // Get the current fixed height of the element
  const startHeight = `0px`;
  // Calculate the open height of the element (summary height + content height)
  const endHeight = `${contentEl.value.offsetHeight}px`;

  // If there is already an animation running
  if (animation.value) {
    // Cancel the current animation
    animation.value.cancel();
  }

  // Start a WAAPI animation
  animation.value = contentEl.value.animate(
    {
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight],
    },
    {
      // If the duration is too slow of fast, you can change it here
      duration: 400,
      // You can also change the ease of the animation
      easing: "ease-out",
    }
  );
  // When the animation is complete, call onAnimationFinish()
  animation.value.onfinish = () => onAnimationFinish(true);
  // If the animation is cancelled, isExpanding variable is set to false
  animation.value.oncancel = () => (isExpanding.value = false);
}

function shrink() {
  isClosing.value = true;
  const startHeight = `${contentEl.value.offsetHeight}px`;
  const endHeight = 0;
  // If there is already an animation running
  if (animation.value) {
    // Cancel the current animation
    animation.value.cancel();
  }
  animation.value = contentEl.value.animate(
    {
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight],
    },
    {
      // If the duration is too slow or fast, you can change it here
      duration: 400,
      // You can also change the ease of the animation
      easing: "ease-out",
    }
  );
  // When the animation is complete, call onAnimationFinish()
  animation.value.onfinish = () => onAnimationFinish(false);
  // If the animation is cancelled, isClosing variable is set to false
  animation.value.oncancel = () => (isClosing.value = false);
}

function openContent() {
  // Apply a fixed height on the element
  contentEl.value.style.height = `${contentEl.value.offsetHeight}px`;
  // Force the [open] attribute on the details element
  detailsEl.value.open = true;
  // Wait for the next frame to call the expand function
  window.requestAnimationFrame(() => expand());
}

function onAnimationFinish(open: boolean) {
  // Set the open attribute based on the parameter
  try {
    detailsEl.value.open = open;
    // Clear the stored animation
    animation.value = null;
    // Reset isClosing & isExpanding
    isClosing.value = false;
    isExpanding.value = false;
    // Remove the overflow hidden and the fixed height
    contentEl.value.style.height = "";
  } catch (err) {
    return;
  }
}
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
details {
  summary {
    cursor: pointer;
    display: block;
  }
  section {
    overflow: hidden;
  }
  &.MDROP {
    background-color: $color_box;
    border-radius: min($ui_radius, 20px);
    summary {
      padding: 1rem;
    }
    section {
      background: m-contrast("box", 5%);
      border-radius: 0 0 min($ui_radius, 20px) min($ui_radius, 20px);
      padding: 0 1rem;
    }
  }
}
</style>
