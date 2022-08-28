<template>
  <div
    :class="`MSLIDER ${pop ? 'pop' : ''}`"
    :style="`--ratio: ${ratio}; --child-count: ${child_count}`"
  >
    <div ref="track" :style="`--current-shown: ${currentShown}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MSlider",
  props: { ratio: String, pop: Boolean, infinite: Boolean, changeTime: String },
  data() {
    return {
      currentShown: 0,
      child_count: 0,
    };
  },
  watch: {
    currentShown(newValue) {
      document
        .querySelector(".MSLIDER .current-shown")
        ?.classList.remove("current-shown");
      this.$refs.track.children[newValue].classList.add("current-shown");
    },
  },
  mounted() {
    this.$refs.track.children[0]?.classList.add("current-shown");
    this.child_count = this.$refs.track.childElementCount;
    if (this.changeTime) setInterval(this.next, this.changeTime);
  },
  updated() {
    this.$refs.track.children[0]?.classList.add("current-shown");
    this.child_count = this.$refs.track.childElementCount;
  },
  methods: {
    next() {
      if (this.currentShown < this.child_count - 1) {
        this.currentShown++;
      } else if (this.infinite) {
        this.currentShown = 0;
      }
    },
    previous() {
      if (this.currentShown > 0) {
        this.currentShown--;
      } else if (this.infinite) {
        this.currentShown = this.child_count - 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.MSLIDER {
  display: inline-block;
  position: relative;
  overflow: hidden;
  aspect-ratio: var(--ratio);
  $current-shown: var(--current-shown);
  &.pop {
    overflow: visible;
    .current-shown {
      transform: scale(1.06);
      z-index: 1;
    }
    & > div > *:not(.current-shown) {
      filter: grayscale(100%) brightness(60%);
    }
    & > div > * {
      transition: all 0.4s ease;
    }
  }
  & > div {
    perspective: 1000px;
    transform-style: preserve-3d;
    height: 100%;
    width: calc(var(--child-count) * 100%);
    transform: translateX(
      calc(var(--current-shown) * -100% / var(--child-count))
    );
    display: grid;
    grid-template-columns: repeat(var(--child-count), 1fr);
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.4s ease;
  }
}
</style>
