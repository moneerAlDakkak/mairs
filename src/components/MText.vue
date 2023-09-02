<template>
  <div
    :class="{
      MTEXT: !unstyled,
      'm-bordered': bordered,
      'm-tags': tags,
      'm-disabled': disabled,
    }"
  >
    <label :for="id" v-if="label">{{ label }}</label>
    <div @click="input?.focus()">
      <template v-if="tags">
        <transition-group name="fade">
          <span v-for="tag in modelValue" :key="tag">{{ tag }}</span>
        </transition-group>
      </template>

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
        >{{ tags ? "" : modelValue }}</textarea
      >
    </div>
    <div>
      <!-- validation -->
      <template v-if="pattern && firstInput">
        <span v-if="patternMatch && validMessage" class="m-valid">
          {{ validMessage }}
        </span>
        <span v-if="!patternMatch && invalidMessage" class="m-invalid">
          {{ invalidMessage }}
        </span>
      </template>
      <!-- counter -->
      <span v-if="maxlength && modelValue">
        {{ maxlength - modelValue.length }}
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
import {
  withDefaults,
  ref,
  onMounted,
  getCurrentInstance,
  computed,
} from "vue";

// Define props
const props = withDefaults(
  defineProps<{
    id: string;
    modelValue?: string | string[];
    textValue?: string;
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
    includedHtml?: string[];
    transformer?: (s: string) => string;
    unstyled?: true;
  }>(),
  {}
);

const emit = defineEmits(["update:modelValue", "update:textValue"]);

let firstInput = ref(false);
let patternMatch = ref(false);
let dir = ref("");
const ar = /[\u0621-\u064A]/;
const input = ref<HTMLInputElement | null>(null);
const instance = getCurrentInstance();

const formParent = computed(() => {
  let parent = instance?.parent;
  while (parent && parent.vnode.el?.nodeName != "FORM") {
    parent = parent.parent;
  }
  return parent;
});

onMounted(() => {
  patternMatch.value = props.pattern
    ? props.pattern.test(input.value?.value as string)
    : true;
  if (props.pattern && !patternMatch.value) {
    (formParent as any)?.value?.exposed.registerToInvalids(props.id);
  }
  props.autoDirection ? adjustDirection() : null;
});

// Component methods :

function cleanHtmlString(htmlString: string): string {
  // This function was generated using ChatGPT!
  const tagPattern = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  return htmlString.replace(tagPattern, (match, tagName) => {
    if (
      props.includedHtml &&
      props.includedHtml.includes(tagName.toLowerCase())
    ) {
      return match; // Allow the tag to remain
    } else {
      return ""; // Remove the tag
    }
  });
}

function adjustDirection() {
  if (input.value && ar.test(input.value.value[0])) {
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
  emit("update:textValue", e.currentTarget.value);
  if (!props.tags) {
    let newValue = e.currentTarget.value;
    if (props.includedHtml) {
      newValue = cleanHtmlString(newValue);
    }
    if (props.transformer) {
      newValue = props.transformer(newValue);
    }
    emit("update:modelValue", newValue);
  }
  if (props.autoDirection) adjustDirection();
  if (props.pattern) checkValidate(e.currentTarget.value.trim());
}

// Work only when the tags option is toggled :
function addTag(e: any) {
  e.preventDefault();
  // Doesn't work when :
  // // maxlength is reached
  if (!props.modelValue || !(props.modelValue instanceof Array)) return;
  if (props.maxlength && props.maxlength <= props.modelValue.length) return;
  // // the input doesn't match the pattern
  if (!patternMatch.value) return;
  // Add tag
  const newTag = props.transformer
    ? props.transformer(e.currentTarget.value)
    : e.currentTarget.value;
  const newTags = [...props.modelValue, newTag];
  // Update modelValue with new tags array
  emit("update:modelValue", newTags);
  // Reset the input after adding a tag
  e.currentTarget.value = "";
  // Reset first input
  firstInput.value = false;
}

const lastValue = ref("");
function removeTag(e: any) {
  if (!props.modelValue || !(props.modelValue instanceof Array)) return;
  // remove a tag when pressing backspace on an empty field
  if (e.key == "Backspace" && lastValue.value === "") {
    const newTags = [...props.modelValue];
    newTags.pop();
    // update the modelValue with the new array
    emit("update:modelValue", newTags);
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
  gap: 0.25rem;
  label {
    font-weight: bold;
    margin: 0 0.25rem;
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
    gap: 0.5rem;
    padding: 1rem;
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
      padding: 0.25rem 0.5rem;
      border-radius: $ui_radius;
      white-space: nowrap;
      display: inline-block;
    }
  }
  & > div:last-of-type {
    font-size: 0.8em;
    margin: 0 0.25rem;
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
