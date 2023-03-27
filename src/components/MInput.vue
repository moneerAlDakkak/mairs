<template>
  <div
    :class="`MINPUT${bordered ? ' m-bordered' : ''}${
      disabled ? ' m-disabled' : ''
    }`"
  >
    <label :for="id" v-if="label">{{ label }}</label>
    <div>
      <slot name="start"></slot>
      <input
        :dir="dir"
        ref="input"
        v-bind="$attrs"
        :type="type"
        :value="modelValue"
        :id="id"
        :disabled="disabled"
        @input="handleInput($event)"
      />
      <slot name="end"></slot>
    </div>
    <div>
      <!-- validation -->
      <!-- TODO: Validation span mount & unmount cause letters deleting -->
      <template v-if="pattern && firstInput">
        <span v-if="patternMatch && validMessage" class="m-valid">
          {{ validMessage }}
        </span>
        <span v-if="!patternMatch && invalidMessage" class="m-invalid">
          {{ invalidMessage }}
        </span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MInput",
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {
  withDefaults,
  ref,
  onMounted,
  getCurrentInstance,
  computed,
  watch,
} from "vue";

// Define props
const props = withDefaults(
  defineProps<{
    id: string;
    modelValue?: string | number;
    pattern?: RegExp;
    invalidMessage?: string;
    validMessage?: string;
    autoDirection?: boolean;
    bordered?: boolean;
    type?: "text" | "email" | "password" | "number" | "date" | "url";
    label?: string;
    disabled?: boolean;
    transformer?: (s: string) => string;
  }>(),
  {
    autoDirection: false,
    bordered: false,
    type: "text",
  }
);

const emit = defineEmits(["update:modelValue"]);

let firstInput = ref(false);
let patternMatch = ref(
  props.pattern ? props.pattern.test(props.modelValue as string) : true
);
let dir = ref("");
const ar = /[\u0621-\u064A]/;
let input = ref({ value: "" });
const instance = getCurrentInstance();

const formParent = computed(() => {
  let parent = instance?.parent;
  while (parent && parent.vnode.el?.nodeName != "FORM") {
    parent = parent.parent;
  }
  return parent;
});

onMounted(() => {
  if (props.pattern && !patternMatch.value) {
    (formParent as any)?.value?.exposed.registerToInvalids(props.id);
  }
  props.autoDirection ? adjustDirection() : null;
});

// Component methods :

function adjustDirection() {
  if (ar.test(input.value.value)) {
    dir.value = "rtl";
  } else {
    dir.value = "ltr";
  }
}

function isValid() {
  return patternMatch.value;
}

function checkValidate(currentInput: string | number) {
  if (!props.pattern) return;
  if (props.pattern.test(currentInput.toString())) {
    patternMatch.value = true;
    (formParent as any)?.value?.exposed.removeFromInvalids(props.id);
  } else {
    patternMatch.value = false;
    (formParent as any)?.value?.exposed.registerToInvalids(props.id);
  }
}

function handleInput(e: any) {
  firstInput.value = true;
  let newValue = e.currentTarget.value;
  if (props.transformer) {
    newValue = props.transformer(newValue);
  }
  emit("update:modelValue", newValue);
  if (props.autoDirection) adjustDirection();
  checkValidate(e.currentTarget.value);
}
defineExpose({
  isValid,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
@include m-animation-fade("fade");

div.MINPUT {
  display: flex;
  flex-flow: column nowrap;
  gap: m-ui-grid(0.25);
  label {
    font-weight: bold;
    margin: 0 m-ui-grid(0.25);
  }
  &.m-bordered > div:first-of-type {
    border: 2px solid $color_box;
    background-color: transparent;
  }
  &.m-disabled > div:first-of-type:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(50%);
    background-color: m-adjust-color("text", $alpha: -0.8);
    border-radius: $ui_radius;
  }
  & > div:first-of-type {
    position: relative;
    background-color: $color_box;
    border-radius: $ui_radius;
    transition: box-shadow 0.2s ease;
    display: flex;
    align-content: center;
    align-items: center;
    // gap: 16px;
    gap: m-ui-grid();
    // padding: 16px 16px;
    padding: m-ui-grid();
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
      &::placeholder {
        color: m-adjust-color("text", $alpha: -0.6);
      }
    }
  }
  & > div:last-of-type {
    font-size: 0.8em;
    margin: 0 m-ui-grid(0.25);
    span {
      &.m-valid {
        color: $color_safe;
      }
      &.m-invalid {
        color: $color_danger;
      }
    }
  }
}
</style>
