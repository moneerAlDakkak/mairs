<template>
  <p
    :class="classes"
    ref="mp"
    :dir="dir"
    @focus="switchToEditable()"
    @blur="math ? renderMathJax() : null"
    @input="
      recordContent();
      autoDirection ? adjustDirection() : null;
    "
  >
    <slot></slot>
  </p>
</template>

<script lang="ts">
export default {
  name: "MP",
};
</script>

<script lang="ts" setup>
import { withDefaults, ref, computed, onBeforeMount, onMounted } from "vue";

// Define props
const props = withDefaults(
  defineProps<{
    math?: boolean;
    autoDirection?: boolean;
    bordered?: boolean;
    dashed?: boolean;
  }>(),
  {}
);

// Component vars
const ar = /[\u0621-\u064A]/;
let dir = ref("ltr");
let rawContent = ref("");

const classes = computed(() => {
  let types = ["MP"];
  if (props.bordered) {
    types.push("m-bordered");
  }
  if (props.dashed) {
    types.push("m-dashed");
  }
  return types.join(" ");
});

// template refs
let mp: any = ref(null);

// Component methods

function getRawContent(): string {
  return rawContent.value;
}
function recordContent() {
  rawContent.value = mp.value.innerText;
}
function switchToEditable() {
  mp.value.innerText = rawContent.value;
}

function adjustDirection() {
  if (ar.test(mp.value.textContent.trim()[0])) {
    dir.value = "rtl";
  } else {
    dir.value = "ltr";
  }
}

function renderMathJax() {
  if (window && (window as any).MathJax) {
    (window as any).MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [
          ["$", "$"],
          // ["(", ")"],
        ],
        displayMath: [
          ["$$", "$$"],
          // ["[", "]"],
        ],
        processEscapes: true,
        processEnvironments: true,
      },
      // Center justify equations in code and markdown cells. Elsewhere
      // we use CSS to left justify single line equations in code cells.
      displayAlign: "center",
      "HTML-CSS": {
        styles: { ".MathJax_Display": { margin: 0 } },
        // linebreaks: { automatic: true },
      },
    });
    (window as any).MathJax.Hub.Queue([
      "Typeset",
      (window as any).MathJax.Hub,
      mp.value,
    ]);
  }
}

// Hooks

onBeforeMount(() => {
  if (document && props.math && !document.getElementById("MATHJAX")) {
    const mathjax = document.createElement("script");
    mathjax.id = "MATHJAX";
    mathjax.src =
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML";
    document.body.appendChild(mathjax);
  }
});

onMounted(() => {
  recordContent();
  if (props.autoDirection) {
    adjustDirection();
  }
  if (props.math) {
    setTimeout(renderMathJax, 400);
  }
});

defineExpose({
  getRawContent,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;

p {
  &.m-bordered,
  &.m-dashed {
    border-radius: $ui_radius;
    border-radius: min($ui_radius, 20px);
    background: m-adjust-color("accent", $alpha: -0.9);
    border: 1px solid $color_accent;
    padding: m-ui-grid();
    &.m-dashed {
      border-style: dashed;
    }
  }
}
</style>
