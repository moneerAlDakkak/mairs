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

<script>
export default {
  name: "MP",
  props: {
    math: {
      type: Boolean,
      default: false,
    },
    autoDirection: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    dashed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ar: /[\u0621-\u064A]/,
      dir: "ltr",
      rawContent: "",
    };
  },
  computed: {
    classes() {
      let types = ["MP"];
      if (this.bordered) {
        types.push("m-bordered");
      }
      if (this.dashed) {
        types.push("m-bordered m-dashed");
      }
      return types.join(" ");
    },
  },
  methods: {
    getRawContent() {
      return this.rawContent;
    },
    recordContent() {
      this.rawContent = this.$refs.mp.innerText;
    },
    switchToEditable() {
      this.$refs.mp.innerText = this.rawContent;
    },
    renderMathJax() {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
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
        window.MathJax.Hub.Queue([
          "Typeset",
          window.MathJax.Hub,
          this.$refs.mp,
        ]);
      }
    },
    adjustDirection() {
      if (this.ar.test(this.$refs.mp.textContent.trim()[0])) {
        this.dir = "rtl";
      } else {
        this.dir = "ltr";
      }
    },
  },
  beforeMount() {
    if (this.math && !document.getElementById("MATHJAX")) {
      const mathjax = document.createElement("script");
      mathjax.id = "MATHJAX";
      mathjax.src =
        "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML";
      document.body.appendChild(mathjax);
    }
  },
  mounted() {
    this.recordContent();
    if (this.autoDirection) {
      this.adjustDirection();
    }
    if (this.math) {
      setTimeout(this.renderMathJax, 400);
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../m" as *;

p {
  &.m-bordered {
    border-radius: $ui_radius;
    background: m-change-opacity("accent", -0.9);
    border: 1px solid $color_accent;
    &.m-dashed {
      border: 1px dashed $color_accent;
    }
  }
}
</style>
