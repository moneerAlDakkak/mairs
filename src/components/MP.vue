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
@use "../../sass" as *;

p {
  &.m-bordered, &.m-dashed {
    border-radius: $ui_radius;
    border-radius: min($ui_radius, 20px);
    background: m-adjust-color("accent", $alpha: -0.9);
    border: 1px solid $color_accent;
    padding: 20px 22px;
    &.m-dashed {
      border-style: dashed;
    }
  }
}
</style>
