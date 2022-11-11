<template>
  <div
    ref="slider"
    :class="`MSLIDER`"
    :style="`--ratio: ${ratio}; --child-count: ${child_count}`"
    @scroll="handleScroll($event)"
  >
    <div ref="track" :style="`--current-shown: ${currentShown}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MSlider",
  props: { ratio: String, infinite: Boolean, changeTime: String },
  data() {
    return {
      currentShown: 0,
      child_count: 0,
      lastPosition: 0,
    };
  },
  mounted() {
    this.child_count = this.$refs.track.childElementCount;
    if (this.changeTime) setInterval(this.next, this.changeTime);
  },
  updated() {
    this.child_count = this.$refs.track.childElementCount;
  },
  watch: {
    currentShown(newShown) {
      // Stop the manual scroll
      this.$refs.slider.style.overflow = "hidden";
      // Automatic scroll
      this.$refs.slider.scrollLeft =
        newShown * this.$refs.track.firstElementChild.offsetWidth;
    },
  },
  methods: {
    next() {
      this.$refs.slider.style.overflow = "hidden";
      if (this.currentShown < this.child_count - 1) {
        this.currentShown++;
      } else {
        this.currentShown = 0;
      }
    },
    previous() {
      this.$refs.slider.style.overflow = "hidden";
      if (this.currentShown > 0) {
        this.currentShown--;
      } else {
        this.currentShown = this.child_count - 1;
      }
    },
    handleScroll(e) {
      if (e.target.style.overflow === "hidden") {
        if (
          e.target.scrollLeft ==
          this.currentShown * this.$refs.track.firstElementChild.offsetWidth
        ) {
          this.$refs.slider.style.overflow = "auto";
        }
      } else {
        // Decide the scroll direction
        let direction =
          this.lastPosition > this.$refs.slider.scrollLeft
            ? "backwards"
            : "forwards";
        if (direction === "forwards") {
          this.next();
        } else {
          this.previous();
        }
      }
      this.lastPosition = this.$refs.slider.scrollLeft;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../sass" as *;
.MSLIDER {
  display: inline-block;
  position: relative;
  overflow: auto;
  aspect-ratio: var(--ratio);
  scroll-behavior: smooth;
  border-radius: min($ui_radius, 20px);
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  & > div {
    height: 100%;
    width: calc(var(--child-count) * 100%);
    display: grid;
    grid-template-columns: repeat(var(--child-count), 1fr);
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.4s ease;
    // transform: translateX(
    //   calc(var(--current-shown) * -100% / var(--child-count) - 200px)
    // );
  }
}
</style>
