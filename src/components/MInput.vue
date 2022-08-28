<template>
  <div class="MINPUT">
    <slot name="start"></slot>
    <input
      :dir="dir"
      ref="input"
      v-bind="$attrs"
      :id="id"
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
    <transition name="fade">
      <template v-if="pattern && firstInput">
        <span v-if="!patternMatch && invalidMessage" class="m-invalid">
          {{ invalidMessage }}
        </span>
        <span v-else-if="patternMatch && validMessage" class="m-valid">
          {{ validMessage }}
        </span>
      </template>
    </transition>
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
      dir: "ltr",
    };
  },
  inheritAttrs: false,
  props: {
    modelValue: String,
    id: {
      type: String,
      required: true,
    },
    pattern: RegExp,
    invalidMessage: String,
    validMessage: String,
    autoDirection: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["text", "email", "password", "number", "date"].includes(value);
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
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../m" as *;
@include m-animation-fade("fade");

div.MINPUT {
  width: 200px;
  position: relative;
  background-color: m-change-opacity("text", -0.9);
  border-radius: $ui_radius;
  transition: box-shadow 0.2s ease;
  margin-bottom: 30px;
  display: flex;
  align-content: center;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  input {
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    color: $color_text;
    font-size: 1em;
    font-family: inherit;
    caret-color: m-change-opacity("accent", -0.2);
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
      backdrop-filter: grayscale(1);
      background-color: m-change-opacity("text", -0.8);
    }
    &::placeholder {
      color: m-change-opaccity("text", -0.8);
    }
  }
  & > span {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    font-size: 14px;
    display: block;
    font-weight: bold;
    &.m-valid {
      color: green;
    }
    &.m-invalid {
      color: red;
    }
  }
}
</style>
