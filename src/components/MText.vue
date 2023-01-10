<template>
  <div
    :class="`MTEXT${bordered ? ' m-bordered' : ''}${tags ? ' m-tags' : ''}${
      disabled ? ' m-disabled' : ''
    }`"
  >
    <label :for="id" v-if="label">{{ label }}</label>
    <div @click="$refs.input.focus()">
      <transition-group name="fade">
        <span v-for="tag in actual_tags" :key="tag">{{ tag }}</span>
      </transition-group>
      <textarea
        :dir="dir"
        ref="input"
        v-bind="$attrs"
        :id="id"
        @input="handleInput($event)"
        @keydown.enter="tags ? addTag($event) : null"
        @keyup="tags ? removeTag($event) : null"
        :rows="tags ? 1 : rows"
        :maxlength="!tags ? maxlength : undefined"
        :disabled="disabled"
      ></textarea>
    </div>
    <div>
      <!-- validation -->
      <span
        v-if="pattern && firstInput && (invalidMessage || validMessage)"
        :class="patternMatch ? 'm-valid' : 'm-invalid'"
      >
        <template v-if="patternMatch">
          {{ validMessage }}
        </template>
        <template v-else>
          {{ invalidMessage }}
        </template>
      </span>
      <!-- counter -->
      <span v-if="maxlength">
        <template v-if="!tags">
          {{ maxlength - modelValue.length }}
        </template>
        <template v-else>
          {{ maxlength - actual_tags.length }}
        </template>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MText",
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
// @ts-nocheck
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
    modelValue?: string | number | string[];
    autoDirection?: boolean;
    bordered?: boolean;
    label?: string;
    tags?: boolean;
    maxlength?: number;
    pattern?: RegExp;
    invalidMessage?: string;
    validMessage?: string;
    disabled?: boolean;
    rows?: number;
  }>(),
  {}
);

const emit = defineEmits(["update:modelValue"]);

let firstInput = ref(false);
let patternMatch = ref(false);
let dir = ref("");
const ar = /[\u0621-\u064A]/;
let input = ref({ value: "" });
const instance = getCurrentInstance();
const actual_tags = ref([]);

const formParent = computed(() => {
  let parent = instance?.parent;
  while (parent && parent.vnode.el?.nodeName != "FORM") {
    parent = parent.parent;
  }
  return parent;
});

onMounted(() => {
  patternMatch.value = props.pattern
    ? props.pattern.test(input.value.value as string)
    : true;
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
  if (!props.tags) {
    emit("update:modelValue", e.currentTarget.value);
  }
  props.autoDirection ? adjustDirection() : null;
  if (props.pattern) checkValidate(e.currentTarget.value.trim());
}

// Work only when the tags option is toggled :
function addTag(e: any) {
  e.preventDefault();
  // Doesn't work when :
  // // maxlength is reached
  if (props.maxlength && props.maxlength <= actual_tags.value.length) return;
  // // the input doesn't match the pattern
  if (!patternMatch.value) return;
  // Add tag
  actual_tags.value.push(e.currentTarget.value);
  // Update modelValue with new tags array
  emit("update:modelValue", actual_tags.value);
  // Reset the input after adding a tag
  e.currentTarget.value = "";
  // Reset first input
  firstInput.value = false;
}

const lastValue = ref("");
function removeTag(e: any) {
  // remove a tag when pressing backspace on an empty field
  if (e.key == "Backspace" && lastValue.value === "") {
    actual_tags.value.pop();
    // update the modelValue with the new array
    emit("update:modelValue", actual_tags.value);
  }
  lastValue.value = e.currentTarget.value;
}

defineExpose({
  isValid,
});
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
@include m-animation-fade("fade");

div.MTEXT {
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
    flex-flow: row wrap;
    align-content: center;
    align-items: center;
    gap: m-ui-grid(0.5);
    padding: m-ui-grid();
    textarea {
      &:is(.m-tags textarea) {
        overflow: hidden;
        white-space: nowrap;
      }
      resize: none;
      background: transparent;
      flex: 1;
      min-width: min(200px, 100%);
      height: 100%;
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
    > span {
      background: m-change-color("accent", $alpha: 0.08);
      color: $color_accent;
      border: 1px solid m-change-color("accent", $alpha: 0.2);
      font-size: 0.9em;
      padding: m-ui-grid(0.25) m-ui-grid(0.5);
      border-radius: $ui_radius;
      white-space: nowrap;
      display: inline-block;
    }
  }
  & > div:last-of-type {
    font-size: 0.8em;
    margin: 0 m-ui-grid(0.25);
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas: "validation counter";
    flex-flow: row nowrap;
    justify-content: space-between;
    span {
      &.m-valid {
        color: $color_safe;
      }
      &.m-invalid {
        color: $color_danger;
      }
      &:first-of-type {
        grid-area: validation;
      }
      &:last-of-type {
        grid-area: counter;
      }
    }
  }
}
</style>
