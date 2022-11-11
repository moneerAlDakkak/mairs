<template>
  <div :class="`MINPUT ${bordered ? 'm-bordered' : ''}`">
    <div>
      <slot name="start"></slot>
      <input
        :dir="dir"
        ref="input"
        v-bind="$attrs"
        :type="type"
        :value="modelValue"
        @input="
          $emit('update:modelValue', $event.currentTarget.value);
          autoDirection && type == 'text' ? adjustDirection() : null;
          firstInput = true;
        "
      />
      <div></div>
      <slot name="end"></slot>
    </div>
    <template v-if="pattern && firstInput">
      <span v-if="!patternMatch && invalidMessage" class="m-invalid">
        {{ invalidMessage }}
      </span>
      <span v-else-if="patternMatch && validMessage" class="m-valid">
        {{ validMessage }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: "MINPUT",
  data() {
    return {
      firstInput: false,
      patternMatch: this.pattern ? this.pattern.test(this.modelValue) : true,
      ar: /[\u0621-\u064A]/,
      dir: "",
    };
  },
  inheritAttrs: false,
  props: {
    modelValue: String | Number,
    pattern: RegExp,
    invalidMessage: String,
    validMessage: String,
    autoDirection: Boolean,
    bordered: Boolean,
    id: { type: String, required: true },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["text", "email", "password", "number", "date", "url"].includes(
          value
        );
      },
    },
  },
  watch: {
    modelValue(value) {
      if (!this.pattern) return;

      if (this.pattern.test(value)) {
        this.patternMatch = true;
        this.formParent?.removeFromInvalids(this.id);
      } else {
        this.patternMatch = false;
        this.formParent?.registerToInvalids(this.id);
      }
    },
  },
  computed: {
    formParent() {
      let parent = this.$parent;
      while (parent && parent.$el.nodeName != "FORM") {
        parent = parent.$parent;
      }
      return parent;
    },
  },
  mounted() {
    if (this.pattern && !this.patternMatch) {
      this.formParent?.registerToInvalids(this.id);
    }
  },
  methods: {
    adjustDirection() {
      if (this.ar.test(this.$refs.input.value)) {
        this.dir = "rtl";
      } else {
        this.dir = "ltr";
      }
    },
    isValid() {
      return this.patternMatch;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../sass" as *;
@include m-animation-fade("fade");

div.MINPUT {
  & > div {
    position: relative;
    background-color: $color_box;
    border-radius: $ui_radius;
    transition: box-shadow 0.2s ease;
    display: flex;
    align-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    input {
      background: transparent;
      width: 100%;
      border: none;
      outline: none;
      color: $color_text;
      font-size: 1em;
      font-family: inherit;
      caret-color: m-adjust-color("accent", $alpha: -0.2);
      & + div {
        border-radius: $ui_radius;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: none;
      }
      &[disabled] + div {
        display: block;
        backdrop-filter: grayscale(50%);
        background-color: m-adjust-color("text", $alpha: -0.8);
      }
      &::placeholder {
        color: m-adjust-color("text", $alpha: -0.6);
      }
    }
  }
  & > span {
    font-size: 0.8em;
    display: block;
    padding: 4px;
    &.m-valid {
      color: $color_safe;
    }
    &.m-invalid {
      color: $color_danger;
    }
  }
  &.m-bordered > div {
    border: 2px solid $color_box;
    background-color: transparent;
  }
}
</style>
