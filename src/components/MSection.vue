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
import { withDefaults, onMounted, ref, onUnmounted } from "vue";
// Define props
const props = withDefaults(
  defineProps<{
    forward?: boolean;
  }>(),
  {}
);

// template refs
let sectionEl: any = ref(null);

// Observer setup
let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const ratio = Math.round(entry.intersectionRatio * 10);
        const percentage = ratio * 10;
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-m-visible", `${percentage}%`);
          (entry.target as HTMLElement).style.setProperty(
            "--m-visibility-ratio",
            `${percentage}%`
          );
        } else {
          if (!props.forward) entry.target.removeAttribute("data-m-visible");
        }
      });
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
  );
  observer.observe(sectionEl.value);
});

onUnmounted(() => {
  observer.disconnect();
});
</script>
