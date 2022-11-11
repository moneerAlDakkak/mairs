<template>
  <section ref="section" class="MSECTION">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "MSection",
  props: {
    forward: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-m-visible", true);
        } else {
          if (!this.forward) entry.target.setAttribute("data-m-visible", false);
        }
      });
    });
    observer.observe(this.$refs.section);
  },
};
</script>

<style lang="scss" scoped></style>
