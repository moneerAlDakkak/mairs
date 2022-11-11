<template>
  <details
    :class="`MDROP ${noStyle ? 'm-no-style' : ''}`"
    ref="details"
    :open="open"
  >
    <summary ref="summary" @click.prevent="handleClick">
      <slot name="summary"></slot>
    </summary>
    <section ref="content">
      <slot></slot>
    </section>
  </details>
</template>

<script>
export default {
  name: "MDrop",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    noStyle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClosing: false,
      isExpanding: false,
      animation: null,
    };
  },
  methods: {
    handleClick() {
      // Check if the element is being closed or is already closed
      if (this.isClosing || !this.$refs.details.open) {
        this.openContent();
        // Check if the element is being openned or is already open
      } else if (this.isExpanding || this.$refs.details.open) {
        this.shrink();
      }
    },
    shrink() {
      this.isClosing = true;
      const startHeight = `${this.$refs.content.offsetHeight}px`;
      const endHeight = 0;
      // If there is already an animation running
      if (this.animation) {
        // Cancel the current animation
        this.animation.cancel();
      }
      this.animation = this.$refs.content.animate(
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
      this.animation.onfinish = () => this.onAnimationFinish(false);
      // If the animation is cancelled, isClosing variable is set to false
      this.animation.oncancel = () => (this.isClosing = false);
    },
    openContent() {
      // Apply a fixed height on the element
      this.$refs.content.style.height = `${this.$refs.content.offsetHeight}px`;
      // Force the [open] attribute on the details element
      this.$refs.details.open = true;
      // Wait for the next frame to call the expand function
      window.requestAnimationFrame(() => this.expand());
    },
    expand() {
      // Set the element as "being expanding"
      this.isExpanding = true;
      // Get the current fixed height of the element
      const startHeight = `0px`;
      // Calculate the open height of the element (summary height + content height)
      const endHeight = `${this.$refs.content.offsetHeight}px`;

      // If there is already an animation running
      if (this.animation) {
        // Cancel the current animation
        this.animation.cancel();
      }

      // Start a WAAPI animation
      this.animation = this.$refs.content.animate(
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
      this.animation.onfinish = () => this.onAnimationFinish(true);
      // If the animation is cancelled, isExpanding variable is set to false
      this.animation.oncancel = () => (this.isExpanding = false);
    },
    onAnimationFinish(open) {
      // Set the open attribute based on the parameter
      try {
        this.$refs.details.open = open;
        // Clear the stored animation
        this.animation = null;
        // Reset isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remove the overflow hidden and the fixed height
        this.$refs.content.style.height = "";
      } catch (err) {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../sass" as *;
details {
  summary {
    cursor: pointer;
    display: block;
  }
  section {
    overflow: hidden;
  }
  &:not(.m-no-style) {
    background-color: $color_box;
    border-radius: min($ui_radius, 20px);
    summary {
      padding: 10px 20px;
    }
    section {
      background: m-contrast("box", 5%);
      border-radius: 0 0 min($ui_radius, 20px) min($ui_radius, 20px);
      padding: 0 20px;
    }
  }
}
</style>
