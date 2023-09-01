<template>
  <MDrop class="MSELECT">
    <template #summary>
      <MInput
        v-model="searchString"
        :disabled="multiple"
        :placeholder="placeholder"
        :id="id + '-search'"
        @blur="handleBlur($event)"
        :bordered="bordered"
      >
        <template #start>
          <slot name="start"></slot>
        </template>
        <template #end>
          <slot name="end"></slot>
        </template>
      </MInput>
    </template>
    <!-- Component options -->
    <template v-for="(option, i) of options">
      <div
        v-if="
          !searchString ||
          multiple ||
          option.label?.toLowerCase().includes(searchString.toLowerCase())
        "
        @click="option.disabled ? null : handleClick(option)"
        :class="{
          'm-selected': modelValue.includes(option.value),
          'm-disabled': option.disabled,
        }"
      >
        {{ option.label }}
      </div>
    </template>
  </MDrop>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance, onMounted } from "vue";
import MInput from "./MInput.vue";
import { MDrop } from ".";

export interface OptionAttrs {
  selected?: boolean;
  disabled?: boolean;
  value: string;
  label: string;
}

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<{
  options: OptionAttrs[];
  modelValue: string[] | string;
  multiple?: boolean;
  id: string;
  placeholder?: string;
  bordered?: boolean;
  required?: boolean;
}>();

const labels = computed(() => props.options.map((opt) => opt.label));
const values = computed(() => props.options.map((opt) => opt.value));

function getOptionByLabel(label: string) {
  return props.options.find((opt) => opt.label === label);
}

function getOptionByValue(value: string) {
  return props.options.find((opt) => opt.value === value);
}

const isOpen = ref(false);
const searchString = ref("");

const handleBlur = (e: any) => {
  setTimeout(() => {
    if (!labels.value.includes(searchString.value) && !props.multiple) {
      searchString.value = props.modelValue
        ? getOptionByValue(props.modelValue as string)?.label || ""
        : "";
    }
  }, 100);
  const el = e.currentTarget.parentElement;
  setTimeout(() => {
    el.click();
  }, 200);
};

const handleClick = (option: OptionAttrs) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    let newResult = [...props.modelValue];
    if (newResult.find((el: string) => el === option.value)) {
      newResult = newResult.filter((el: string) => el !== option.value);
    } else {
      newResult.push(option.value);
    }
    emit("update:modelValue", newResult);
    let labels = props.options
      .filter((opt) => newResult.includes(opt.value))
      .map((opt) => opt.label);
    searchString.value = labels.join(", ");
  } else {
    isOpen.value = false;
    emit("update:modelValue", option.value);
    searchString.value = option.label;
  }
  checkValidate();
};

// MForm integration
onMounted(() => {
  if (props.required) {
    (formParent as any)?.value?.exposed.registerToInvalids(props.id);
  }
  const selectedOption = props.options.filter((opt) => opt.selected)[0];
  if (selectedOption) handleClick(selectedOption);
});

function isValid() {
  return props.multiple ? props.modelValue.length > 0 : props.modelValue !== "";
}

const formParent = computed(() => {
  let parent = getCurrentInstance()?.parent;
  while (parent && parent.vnode.el?.nodeName != "FORM") {
    parent = parent.parent;
  }
  return parent;
});

function checkValidate() {
  (formParent as any)?.value?.exposed.removeFromInvalids(props.id);
}
</script>

<style lang="scss" scoped>
@use "../sass/index" as *;
.MSELECT {
  position: relative;
  &:has(.m-bordered) {
    background: none !important;
  }
  :deep(summary) {
    padding: 0 !important;
  }
  :deep(section) {
    position: absolute;
    width: 100%;
    padding: 0 !important;
  }
  summary + section div {
    padding: 0.5rem 1rem;
    cursor: pointer;
    &.m-selected {
      background-color: m-change-color("text", $alpha: 0.1);
    }
    &.m-disabled {
      opacity: 50%;
    }
  }
  .MINPUT.m-disabled {
    :deep(> div:first-of-type:after) {
      background-color: transparent;
      backdrop-filter: none;
    }
  }
}
</style>
