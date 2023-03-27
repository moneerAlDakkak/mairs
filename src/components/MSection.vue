<template>
  <section ref="sectionEl" class="MSECTION">
    <slot></slot>
  </section>
</template>

<script lang="ts">
export default {
  name: "MSection",
};
</script>
<script lang="ts" setup>
import { withDefaults, onMounted, ref } from "vue";
// Define props
const props = withDefaults(
  defineProps<{
    forward?: boolean;
  }>(),
  {}
);

// template refs
let sectionEl: any = ref(null);

onMounted(() => {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute(
            "data-m-visible",
            `${entry.intersectionRatio * 100}%`
          );
        } else {
          if (!props.forward) entry.target.removeAttribute("data-m-visible");
        }
        (entry.target as HTMLElement).style.setProperty(
          "--m-visibility-ratio",
          `${entry.intersectionRatio * 100}%`
        );
      });
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
  );
  observer.observe(sectionEl.value);
});
</script>
